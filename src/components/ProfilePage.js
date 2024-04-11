import React, { useState, useContext, useEffect } from 'react';
import { Typography, Button, TextField, Box, Grid, List, ListItem, ListItemText, Paper, Container } from '@mui/material'; // Import Container here
import { signOut, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from 'firebase/auth';
import { auth, database } from '../Firebase'; // Adjust path as needed
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App'; // Correct path as needed
import { get, ref, remove, getDatabase } from 'firebase/database';
import ProfileButton from './ProfileButton';
import FoodCard from './FoodCard'; // Adjust the path as necessary


const ProfilePage = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [userDetails, setUserDetails] = useState({});
  const [dailyIntake, setDailyIntake] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const navigate = useNavigate();
  const { user, setIsLoggedIn } = useContext(AuthContext);

  const defaultButtonStyles = () => ({
    backgroundColor: '#66B2B2',
    color: '#fffafb',
    '&:hover': {
      backgroundColor: '#FFA1A0', // Slightly darker on hover
    },
  });

  useEffect(() => {
    const totalCalories = dailyIntake.reduce((acc, foodItem) => {
      return acc + (foodItem.nutrition.calories || 0);
    }, 0);
  
    // If you need to use the total calories for something else,
    // you can store it in the state
    setTotalCalories(totalCalories);
  }, [dailyIntake]);

  useEffect(() => {
    if (user) {
      const userRef = ref(database, `users/${user.uid}`);
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          setUserDetails(snapshot.val());
        }
      });
  
      // New code to fetch daily intake
      const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
      const dailyIntakeRef = ref(database, `users/${user.uid}/dailyIntake/${today}`);
      get(dailyIntakeRef).then((snapshot) => {
        if (snapshot.exists()) {
          // Assuming daily intake is an array of food items
          const dailyIntakeItems = Object.values(snapshot.val());
          setUserDetails((prevState) => ({
            ...prevState,
            dailyIntake: dailyIntakeItems,
          }));
        }
      });
    }
  }, [user]);

  useEffect(() => {
    const fetchDailyIntake = async () => {
      const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
      const user = auth.currentUser;
      if (user) {
        const dailyIntakeRef = ref(database, `users/${user.uid}/dailyIntake/${today}`);
        try {
          const snapshot = await get(dailyIntakeRef);
          if (snapshot.exists()) {
            setDailyIntake(Object.values(snapshot.val()));
          } else {
            setDailyIntake([]);
          }
        } catch (error) {
          console.error('Error fetching daily intake:', error);
        }
      }
    };
  
    fetchDailyIntake();
  }, [user]);

  
const handleRemove = async (foodItem) => {
  const user = auth.currentUser;
  if (!user) {
    alert('You must be logged in to modify your intake.'); // Consider more user-friendly feedback
    return;
  }

  const today = new Date().toISOString().split('T')[0];
  const dailyIntakePath = `users/${user.uid}/dailyIntake/${today}`;

  try {
    const dailyIntakeRef = ref(database, dailyIntakePath);
    const snapshot = await get(dailyIntakeRef);
    if (snapshot.exists()) {
      const intakeData = snapshot.val();
      let keyToRemove = null;
      Object.entries(intakeData).forEach(([key, value]) => {
        if (value.id === foodItem.id) { // Ensure 'id' exists and is unique
          keyToRemove = key;
        }
      });

      if (keyToRemove) {
        await remove(ref(database, `${dailyIntakePath}/${keyToRemove}`));
        setDailyIntake(dailyIntake.filter((item) => item.id !== foodItem.id)); // Efficient state update
      }
    }
  } catch (error) {
    console.error('Error removing food from profile:', error);
    alert('Failed to remove food from profile.'); // Consider more user-friendly feedback
  }
};

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      setIsLoggedIn(false); // Update the isLoggedIn state
      navigate('/fitnesslogin'); // Navigate to the login page
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleChangePassword = async () => {
    if (newPassword.length < 6) {
      alert('Password must be at least 6 characters long.'); // Consider using a more user-friendly notification method
      return;
    }
  
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      currentPassword // The current password for re-authentication
    );
  
    try {
      // Re-authenticate the user
      await reauthenticateWithCredential(auth.currentUser, credential);
      // Update the password
      await updatePassword(auth.currentUser, newPassword);
      alert('Password updated successfully.'); // Consider using a more user-friendly notification method
      setNewPassword('');
      setCurrentPassword('');
    } catch (error) {
      console.error("Error updating password: ", error);
      alert(error.message); // Consider using a more user-friendly notification method
    }
  };

  const ProfileDetail = ({ label, value }) => (
    <Typography variant="body1" key={label}><strong>{label}:</strong> {value}</Typography>
  );

  

  return (
    <Container component={Paper} elevation={3} sx={{ p: 4, mt: 4, borderRadius: '15px', maxWidth: '600px', mx: 'auto' }}>
      <ProfileButton />
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>Your Profile</Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <ProfileDetail label="Email" value={user.email} />
          <ProfileDetail label="Age" value={userDetails.age} />
          <ProfileDetail label="Height" value={`${userDetails.height} cm`} />
          <ProfileDetail label="Weight" value={`${userDetails.weight} kg`} />
          <ProfileDetail label="Diet Option" value={userDetails.dietOption || 'Not specified'} />
          <ProfileDetail label="Daily Calorie Needs" value={`${userDetails.calorieNeeds} calories`} />
          <Typography variant="h6" sx={{ mt: 2 }}>
          Total Calories for Today: {totalCalories}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            fullWidth
            type="password"
            label="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            type="password"
            label="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Button sx={defaultButtonStyles()} onClick={handleChangePassword} variant="contained">
              Update Password
            </Button>
            <Button sx={defaultButtonStyles()} onClick={handleLogout} variant="outlined">
              Sign Out
            </Button>
          </Box>
        </Grid>
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', marginTop:'30px'}}>Your Selected Foods For Today</Typography>
        <Grid container spacing={2}>
  {dailyIntake.length > 0 ? (
    dailyIntake.map((foodItem, index) => (
      <Grid item key={index} xs={12} sm={6} md={4}>
        <FoodCard 
          food={foodItem} 
          onRemove={handleRemove}
          // Add any additional props that FoodCard requires
        />
      </Grid>
    ))
  ) : (
    <Typography variant="subtitle1">No intake data for today.</Typography>
  )}
</Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
