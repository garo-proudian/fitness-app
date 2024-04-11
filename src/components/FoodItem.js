import FluffyRiceandChickenImage from '../assets/Foodpics/FluffyRiceandChickenRice&Chicken.jpg';
import BarleyandTurkeyBreastPilaf from '../assets/Foodpics/BarleyandTurkeyBreastPilaf.webp'
import BrownRiceandSalmonStirFry from '../assets/Foodpics/BrownRiceandSalmonStir-Fry.webp'
import QuinoaandGrilledChickenBowl from '../assets/Foodpics/QuinoaandGrilledChickenBowl.webp'
import ColorfulTofuStirFry from '../assets/Foodpics/ColorfulTofuStirFry.webp'
import HeartyLentilSoup from '../assets/Foodpics/HeartyLentilSoup.webp'
import GreekSaladImage from '../assets/Foodpics/GreekSaladImage.webp'
import QuinoaSaladImage from '../assets/Foodpics/QuinoaSaladImage.webp'
import SpaghettiSquashPastaImage from '../assets/Foodpics/SpaghettiSquashPastaImage.webp'
import ChickpeaAvocadoSaladImage from '../assets/Foodpics/ChickpeaAvocadoSaladImage.webp'
import CauliflowerRiceStirFryImage from '../assets/Foodpics/CauliflowerRiceStirFryImage.webp'
import GrilledRibeyeSteakwithRoastedVegetables from '../assets/Foodpics/GrilledRibeyeSteakwithRoastedVegetables.webp'
import BeefandBroccoliStirFry from '../assets/Foodpics/BeefandBroccoliStirFry.webp'
import LambChopswithMintPestoandQuinoaSalad from '../assets/Foodpics/LambChopswithMintPestoandQuinoaSalad.webp'
import HighProteinChickenSoup from '../assets/Foodpics/HighProteinChickenSoup.webp'
import AvocadoAndEggSaladImage from '../assets/Foodpics/AvocadoAndEggSaladImage.webp'
import SpinachAndFetaStuffedChickenImage from '../assets/Foodpics/SpinachAndFetaStuffedChickenImage.webp'
import SalmonAndAsparagusImage from '../assets/Foodpics/SalmonAndAsparagusImage.webp'
import AvocadoAndEggToastImage from '../assets/Foodpics/AvocadoandEggToast.webp'
import GreekYogurtWithBerriesAndNutsImage from '../assets/Foodpics/GreekYogurtwithBerriesandNuts.webp'
import ProteinPancakesWithPeanutButterImage from '../assets/Foodpics/ProteinPancakeswithPeanutButter.webp'
import BaconAndSpinachStuffedMushroomsImage from '../assets/Foodpics/Bacon and Spinach Stuffed Mushrooms.webp'
import SausageAndCheeseKetoMuffinsImage from '../assets/Foodpics/Sausage and Cheese Keto Muffins.webp'
import KetoHamAndEggCupsImage from '../assets/Foodpics/Keto Ham and Egg Cups.webp'
import CarrotAndHummusDipImage from '../assets/Foodpics/CarrotandHummusDip.webp'
import GreekYogurtAndBerryParfaitImage from '../assets/Foodpics/GreekYogurtandBerryParfait.webp'
import AppleSlicesWithAlmondButterImage from '../assets/Foodpics/AppleSliceswithAlmondButter.webp'
import TurkeyRollUpsImage from '../assets/Foodpics/TurkeyRollUpsImage.webp'
import CottageCheeseAndPineappleImage from '../assets/Foodpics/CottageCheeseAndPineappleImage.webp'
import EdamameWithSeaSaltImage from '../assets/Foodpics/EdamameWithSeaSaltImage.webp'

const FoodItem =[
    {
        id: 1,
        name: 'Fluffy Rice and Chicken Rice & Chicken',
        ingredients: '1 oz chicken with 1/2 cup rice',
        image: FluffyRiceandChickenImage, // Replace with actual image path
        isFavorite: false,
        vegetarian: false,
        keto: false,
        pescatarian: false,
        recommendedfood:false,
        lunch:true,
        nutrition: {
          servings: 1,
          calories: 475,
          totalFat: '17g',
          saturatedFat: '4g',
          polyunsaturatedFat: '6g',
          monounsaturatedFat: '7g',
          transFat: '0g',
          cholesterol: '25mg',
          sodium: '2280mg',
          potassium: '360mg',
          totalCarbs: '61g',
          dietaryFiber: '5g',
          sugars: '9g',
          protein: '29g',
          vitaminA: '5%',
          vitaminC: '6%',
          calcium: '17%',
          iron: '8%'
        }
    },
    {
      id: 2,
    name: 'Barley and Turkey Breast Pilaf',
    ingredients: '1 oz cooked turkey breast with 1/2 cup cooked barley, mixed with sautéed kale and carrots',
    // Add the path to the image file for the Barley and Turkey Breast Pilaf here
    image: BarleyandTurkeyBreastPilaf,
    isFavorite: false,
    vegetarian: false,
    keto: false,
    pescatarian: false,
    recommendedfood:false,
    lunch:true,
    nutrition: {
      servings: 1,
      calories: 465,
      totalFat: '16g',
      saturatedFat: '3g',
      polyunsaturatedFat: '6g',
      monounsaturatedFat: '6g',
      transFat: '0g',
      cholesterol: '20mg',
      sodium: '2290mg',
      potassium: '400mg',
      totalCarbs: '62g',
      dietaryFiber: '7g',
      sugars: '10g',
      protein: '30g',
      vitaminA: '6%',
      vitaminC: '7%',
      calcium: '18%',
      iron: '9%'
    }
    },
    {
      id: 3,
    name: 'Brown Rice and Salmon Stir-Fry',
    ingredients: '1 oz grilled salmon with 1/2 cup brown rice, stir-fried with broccoli and snap peas',
    // Add the path to the image file for the Brown Rice and Salmon Stir-Fry here
    image: BrownRiceandSalmonStirFry,
    isFavorite: false,
    vegetarian: false,
    keto: false,
    pescatarian: true,
    recommendedfood:false,
    dinner:true,
    nutrition: {
      servings: 1,
      calories: 490,
      totalFat: '19g',
      saturatedFat: '5g',
      polyunsaturatedFat: '7g',
      monounsaturatedFat: '6g',
      transFat: '0g',
      cholesterol: '35mg',
      sodium: '2230mg',
      potassium: '380mg',
      totalCarbs: '63g',
      dietaryFiber: '6g',
      sugars: '7g',
      protein: '29g',
      vitaminA: '8%',
      vitaminC: '9%',
      calcium: '16%',
      iron: '11%'
    }
    },
    {
      id: 4,
    name: 'Quinoa and Grilled Chicken Bowl',
    ingredients: '1 oz grilled chicken over 1/2 cup cooked quinoa, mixed with diced bell peppers and onions',
    // Add the path to the image file for the Quinoa and Grilled Chicken Bowl here
    image: QuinoaandGrilledChickenBowl,
    isFavorite: false,
    vegetarian: false,
    keto: false,
    pescatarian: false,
    recommendedfood:false,
    lunch:true,
    nutrition: {
      servings: 1,
      calories: 480,
      totalFat: '18g',
      saturatedFat: '4g',
      polyunsaturatedFat: '5g',
      monounsaturatedFat: '7g',
      transFat: '0g',
      cholesterol: '30mg',
      sodium: '2150mg',
      potassium: '375mg',
      totalCarbs: '60g',
      dietaryFiber: '6g',
      sugars: '8g',
      protein: '28g',
      vitaminA: '7%',
      vitaminC: '8%',
      calcium: '15%',
      iron: '10%'
    }
    },
    {
      id: 5,
    name: 'Colorful Tofu Stir-Fry',
    ingredients: 'A variety of vegetables like bell peppers, broccoli, and carrots, mixed with cubes of firm tofu, tossed in a light soy sauce',
    image: ColorfulTofuStirFry, // Replace with actual image path
    isFavorite: false,
    vegetarian: true,
    keto: true,
    pescatarian: true,
    recommendedfood:false,
    lunch:true,
    nutrition: {
      servings: 1,
      calories: 430,
      totalFat: '13g',
      saturatedFat: '2g',
      polyunsaturatedFat: '5g',
      monounsaturatedFat: '6g',
      transFat: '0g',
      cholesterol: '0mg',
      sodium: '1900mg',
      potassium: '600mg',
      totalCarbs: '55g',
      dietaryFiber: '8g',
      sugars: '12g',
      protein: '24g',
      vitaminA: '110%',
      vitaminC: '90%',
      calcium: '15%',
      iron: '25%'
    }
    },
    {
      id: 6,
    name: 'Hearty Lentil Soup',
    ingredients: 'Lentils, carrots, tomatoes, onions, and a mix of spices, garnished with fresh parsley',
    image: HeartyLentilSoup, // Replace with actual image path
    isFavorite: false,
    vegetarian: true,
    keto: false,
    pescatarian: true,
    recommendedfood:false,
    lunch:true,
    nutrition: {
      servings: 1,
      calories: 380,
      totalFat: '3g',
      saturatedFat: '1g',
      polyunsaturatedFat: '1g',
      monounsaturatedFat: '1g',
      transFat: '0g',
      cholesterol: '0mg',
      sodium: '680mg',
      potassium: '850mg',
      totalCarbs: '65g',
      dietaryFiber: '15g',
      sugars: '8g',
      protein: '22g',
      vitaminA: '70%',
      vitaminC: '40%',
      calcium: '15%',
      iron: '35%'
    }
    },
    {
      id: 7,
    name: 'Fresh and Colorful Greek Salad',
    ingredients: 'Sliced cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, dressed with olive oil and oregano',
    image: GreekSaladImage,
    isFavorite: false,
    vegetarian: true,
    keto: true,
    pescatarian: true,
    recommendedfood:false,
    lunch:true,
    nutrition: {
      servings: 1,
      calories: 320,
      totalFat: '25g',
      saturatedFat: '7g',
      polyunsaturatedFat: '2g',
      monounsaturatedFat: '15g',
      transFat: '0g',
      cholesterol: '25mg',
      sodium: '680mg',
      potassium: '470mg',
      totalCarbs: '15g',
      dietaryFiber: '3g',
      sugars: '6g',
      protein: '7g',
      vitaminA: '35%',
      vitaminC: '50%',
      calcium: '20%',
      iron: '15%'
    }
    },
    {
      id: 8,
      name: 'Hearty Quinoa Salad',
      ingredients: 'Quinoa, black beans, corn, avocado, cherry tomatoes, cilantro, lime vinaigrette',
      image: QuinoaSaladImage,
      isFavorite: false,
      vegetarian: true,
      keto: false,
      pescatarian: true,
      recommendedfood:false,
      lunch:true,
      nutrition: {
        servings: 1,
        calories: 420,
        totalFat: '18g',
        saturatedFat: '2.5g',
        polyunsaturatedFat: '3g',
        monounsaturatedFat: '12g',
        transFat: '0g',
        cholesterol: '0mg',
        sodium: '300mg',
        potassium: '950mg',
        totalCarbs: '55g',
        dietaryFiber: '12g',
        sugars: '5g',
        protein: '14g',
        vitaminA: '25%',
        vitaminC: '70%',
        calcium: '5%',
        iron: '30%'
      }
    },
    {
      id: 9,
      name: 'Delicious Spaghetti Squash Pasta',
      ingredients: 'Spaghetti squash, spinach, cherry tomatoes, garlic, Parmesan cheese',
      image: SpaghettiSquashPastaImage,
      isFavorite: false,
      vegetarian: true,
      keto: false,
      pescatarian: true,
      recommendedfood:false,
      lunch:true,
      nutrition: {
        servings: 1,
        calories: 290,
        totalFat: '9g',
        saturatedFat: '4g',
        polyunsaturatedFat: '1g',
        monounsaturatedFat: '3g',
        transFat: '0g',
        cholesterol: '15mg',
        sodium: '560mg',
        potassium: '780mg',
        totalCarbs: '45g',
        dietaryFiber: '10g',
        sugars: '12g',
        protein: '8g',
        vitaminA: '110%',
        vitaminC: '90%',
        calcium: '25%',
        iron: '15%'
      }
    },
    {
      id: 10,
      name: 'Chickpea and Avocado Salad',
      ingredients: 'Chickpeas, ripe avocados, cherry tomatoes, red onion, fresh cilantro, lemon-tahini dressing',
      image: ChickpeaAvocadoSaladImage,
      isFavorite: false,
      vegetarian: true,
      keto: false,
      pescatarian: true,
      recommendedfood:false,
      dinner:true,
      nutrition: {
        servings: 1,
        calories: 400,
        totalFat: '20g',
        saturatedFat: '3g',
        polyunsaturatedFat: '5g',
        monounsaturatedFat: '10g',
        transFat: '0g',
        cholesterol: '0mg',
        sodium: '400mg',
        potassium: '980mg',
        totalCarbs: '45g',
        dietaryFiber: '15g',
        sugars: '8g',
        protein: '12g',
        vitaminA: '50%',
        vitaminC: '60%',
        calcium: '10%',
        iron: '20%'
      }
    },
    {
      id: 11,
      name: 'Cauliflower Rice Stir-Fry',
      ingredients: 'Cauliflower rice, peas, carrots, bell peppers, onions, soy sauce, sesame oil, garnished with green onions and sesame seeds',
      image: CauliflowerRiceStirFryImage,
      isFavorite: false,
      vegetarian: true,
      keto: true,
      pescatarian: true,
      recommendedfood:false,
      dinner:true,
      nutrition: {
        servings: 1,
        calories: 250,
        totalFat: '9g',
        saturatedFat: '1g',
        polyunsaturatedFat: '4g',
        monounsaturatedFat: '3g',
        transFat: '0g',
        cholesterol: '0mg',
        sodium: '600mg',
        potassium: '650mg',
        totalCarbs: '35g',
        dietaryFiber: '12g',
        sugars: '10g',
        protein: '9g',
        vitaminA: '110%',
        vitaminC: '150%',
        calcium: '8%',
        iron: '15%'
      }
    },
    {
      id: 12,
      name: 'Grilled Ribeye Steak with Roasted Vegetables',
      ingredients: 'Ribeye steak, asparagus, bell peppers, sweet potatoes, rosemary, thyme, garlic',
      // Replace with actual path to the image for Grilled Ribeye Steak with Roasted Vegetables
      image: GrilledRibeyeSteakwithRoastedVegetables,
      isFavorite: false,
      vegetarian: false,
      keto: true,
      pescatarian: false,
      recommendedfood:false,
      dinner:true,
      nutrition: {
        servings: 1,
        calories: 650,
        totalFat: '40g',
        saturatedFat: '15g',
        polyunsaturatedFat: '3g',
        monounsaturatedFat: '20g',
        transFat: '0g',
        cholesterol: '135mg',
        sodium: '650mg',
        potassium: '1050mg',
        totalCarbs: '35g',
        dietaryFiber: '6g',
        sugars: '8g',
        protein: '45g',
        vitaminA: '120%',
        vitaminC: '80%',
        calcium: '4%',
        iron: '25%'
      }
    },
    {
      id: 13,
      name: 'Beef and Broccoli Stir-Fry',
      ingredients: 'Beef sirloin, broccoli, carrots, soy sauce, ginger, white rice, sesame seeds, green onions',
      // Replace with actual path to the image for Beef and Broccoli Stir-Fry
      image: BeefandBroccoliStirFry,
      isFavorite: false,
      vegetarian: false,
      keto: false,
      pescatarian: false,
      recommendedfood:false,
      dinner:true,
      nutrition: {
        servings: 1,
        calories: 500,
        totalFat: '12g',
        saturatedFat: '3g',
        polyunsaturatedFat: '2g',
        monounsaturatedFat: '6g',
        transFat: '0g',
        cholesterol: '70mg',
        sodium: '900mg',
        potassium: '900mg',
        totalCarbs: '65g',
        dietaryFiber: '5g',
        sugars: '10g',
        protein: '35g',
        vitaminA: '50%',
        vitaminC: '150%',
        calcium: '8%',
        iron: '20%'
      }
    },
    {
      id: 14,
      name: 'Lamb Chops with Mint Pesto and Quinoa Salad',
      ingredients: 'Lamb chops, mint pesto, quinoa, cucumbers, tomatoes, feta cheese, olives, lemon-olive oil vinaigrette',
      // Replace with actual path to the image for Lamb Chops with Mint Pesto and Quinoa Salad
      image: LambChopswithMintPestoandQuinoaSalad,
      isFavorite: false,
      vegetarian: false,
      keto: false,
      pescatarian: false,
      recommendedfood:false,
      dinner:true,
      nutrition: {
        servings: 1,
        calories: 600,
        totalFat: '35g',
        saturatedFat: '15g',
        polyunsaturatedFat: '3g',
        monounsaturatedFat: '15g',
        transFat: '0g',
        cholesterol: '105mg',
        sodium: '600mg',
        potassium: '750mg',
        totalCarbs: '40g',
        dietaryFiber: '8g',
        sugars: '5g',
        protein: '40g',
        vitaminA: '25%',
        vitaminC: '30%',
        calcium: '10%',
        iron: '30%'
      }
    },
    {
      id: 15,
      name: 'High-Protein Chicken Soup',
      ingredients: 'Chicken breast, kidney beans, chickpeas, carrots, celery, spinach, broth, parsley',
      image: HighProteinChickenSoup, // Replace with actual image path or use imported image variable
      isFavorite: false,
      vegetarian: false,
      keto: false,
      pescatarian: false,
      recommendedfood:false,
      dinner:true,
      nutrition: {
        servings: 1,
        calories: 350,
        totalFat: '6g',
        saturatedFat: '1g',
        polyunsaturatedFat: '2g',
        monounsaturatedFat: '2g',
        transFat: '0g',
        cholesterol: '55mg',
        sodium: '700mg',
        potassium: '800mg',
        totalCarbs: '40g',
        dietaryFiber: '10g',
        sugars: '5g',
        protein: '35g',
        vitaminA: '110%',
        vitaminC: '20%',
        calcium: '8%',
        iron: '25%'
      }
    },
      {
        id: 16,
        name: "Avocado and Egg Salad",
        ingredients: "2 boiled eggs, 1 avocado, 1 tablespoon of olive oil, salt, and pepper to taste",
        image: AvocadoAndEggSaladImage,
        isFavorite: false,
        vegetarian: true,
        keto: true, 
        pescatarian: true,
        recommendedfood:false,
        dinner:true,
        nutrition: {
          servings: 1,
          calories: 400,
          totalFat: "35g",
          saturatedFat: "7g",
          polyunsaturatedFat: "5g",
          monounsaturatedFat: "20g",
          transFat: "0g",
          cholesterol: "372mg",
          sodium: "350mg",
          potassium: "975mg",
          totalCarbs: "12g",
          dietaryFiber: "9g",
          sugars: "1g",
          protein: "15g",
          vitaminA: "15%",
          vitaminC: "24%",
          calcium: "5%",
          iron: "12%"
        }
      },
      {
        id: 17,
        name: "Spinach and Feta Stuffed Chicken",
        ingredients: "1 chicken breast, 2 oz feta cheese, 1 cup spinach, 1 tbsp olive oil, garlic, salt, and pepper",
        image: SpinachAndFetaStuffedChickenImage,
        isFavorite: false,
        vegetarian: false,
        keto: true,
        pescatarian: false,
        recommendedfood:false,
        dinner:true,
        nutrition: {
          servings: 1,
          calories: 460,
          totalFat: "30g",
          saturatedFat: "10g",
          polyunsaturatedFat: "3g",
          monounsaturatedFat: "15g",
          transFat: "0g",
          cholesterol: "165mg",
          sodium: "620mg",
          potassium: "450mg",
          totalCarbs: "5g",
          dietaryFiber: "1g",
          sugars: "2g",
          protein: "43g",
          vitaminA: "58%",
          vitaminC: "24%",
          calcium: "25%",
          iron: "15%"
        }
      },
      {
        id: 18,
        name: "Salmon and Asparagus",
        ingredients: "6 oz salmon fillet, 10 asparagus spears, 2 tbsp olive oil, lemon zest, salt, and pepper",
        image: SalmonAndAsparagusImage,
        isFavorite: false,
        vegetarian: false,
        keto: true,
        pescatarian: true,
        recommendedfood:false,
        dinner:true,
        nutrition: {
          servings: 1,
          calories: 507,
          totalFat: "39g",
          saturatedFat: "9g",
          polyunsaturatedFat: "9g",
          monounsaturatedFat: "18g",
          transFat: "0g",
          cholesterol: "125mg",
          sodium: "89mg",
          potassium: "908mg",
          totalCarbs: "6g",
          dietaryFiber: "3g",
          sugars: "3g",
          protein: "34g",
          vitaminA: "17%",
          vitaminC: "13%",
          calcium: "4%",
          iron: "15%"
        }
      },
      {
        id: 19,
        name: "Avocado and Egg Toast",
        ingredients: "1 large slice of whole-grain bread, 1/2 avocado, 2 eggs, salt, pepper, and a pinch of chili flakes",
        image: AvocadoAndEggToastImage,
        isFavorite: false,
        vegetarian: true,
        keto: false,
        pescatarian: true,
        recommendedFood: false,
        breakfast: true,
        nutrition: {
          servings: 1,
          calories: 350,
          totalFat: "24g",
          saturatedFat: "5g",
          polyunsaturatedFat: "3g",
          monounsaturatedFat: "15g",
          transFat: "0g",
          cholesterol: "370mg",
          sodium: "400mg",
          potassium: "650mg",
          totalCarbs: "29g",
          dietaryFiber: "10g",
          sugars: "4g",
          protein: "19g",
          vitaminA: "10%",
          vitaminC: "15%",
          calcium: "6%",
          iron: "12%"
        }
      },
      {
        id: 20,
        name: "Greek Yogurt with Berries and Nuts",
        ingredients: "1 cup Greek yogurt, 1/2 cup mixed berries (strawberries, blueberries, raspberries), 1/4 cup mixed nuts (almonds, walnuts), 1 tbsp honey",
        image: GreekYogurtWithBerriesAndNutsImage,
        isFavorite: false,
        vegetarian: true,
        keto: false,
        pescatarian: true,
        recommendedFood: true,
        breakfast: true,
        nutrition: {
          servings: 1,
          calories: 320,
          totalFat: "18g",
          saturatedFat: "3g",
          polyunsaturatedFat: "2.5g",
          monounsaturatedFat: "10g",
          transFat: "0g",
          cholesterol: "10mg",
          sodium: "70mg",
          potassium: "300mg",
          totalCarbs: "25g",
          dietaryFiber: "4g",
          sugars: "18g",
          protein: "20g",
          vitaminA: "0%",
          vitaminC: "45%",
          calcium: "20%",
          iron: "8%"
        }
      },
      {
        id: 21,
        name: "Protein Pancakes with Peanut Butter",
        ingredients: "1/2 cup oat flour, 1 scoop whey protein powder (vanilla or unflavored), 2 eggs, 1/2 cup almond milk, 1 tbsp natural peanut butter, 1/2 tsp baking powder, pinch of salt",
        image: ProteinPancakesWithPeanutButterImage,
        isFavorite: false,
        vegetarian: false,
        keto: false,
        pescatarian: true,
        recommendedFood: false,
        breakfast: true,
        nutrition: {
          servings: 1,
          calories: 450,
          totalFat: "20g",
          saturatedFat: "5g",
          polyunsaturatedFat: "3g",
          monounsaturatedFat: "8g",
          transFat: "0g",
          cholesterol: "370mg",
          sodium: "200mg",
          potassium: "300mg",
          totalCarbs: "35g",
          dietaryFiber: "5g",
          sugars: "8g",
          protein: "35g",
          vitaminA: "5%",
          vitaminC: "0%",
          calcium: "15%",
          iron: "10%"
        }
      },
      {
        id: 22,
    name: "Bacon and Spinach Stuffed Mushrooms",
    ingredients: "6 large portobello mushrooms, 12 slices of bacon, 2 cups spinach, 1/4 cup cream cheese, 1/4 cup shredded cheddar cheese, 1 garlic clove minced, salt, and pepper",
    image: BaconAndSpinachStuffedMushroomsImage,
    isFavorite: false,
    vegetarian: false,
    keto: true,
    pescatarian: false,
    recommendedFood: false,
    breakfast: true,
    nutrition: {
      servings: 3,
      calories: 220,
      totalFat: "18g",
      saturatedFat: "8g",
      polyunsaturatedFat: "2g",
      monounsaturatedFat: "6g",
      transFat: "0g",
      cholesterol: "45mg",
      sodium: "320mg",
      potassium: "300mg",
      totalCarbs: "5g",
      dietaryFiber: "1g",
      sugars: "2g",
      protein: "15g",
      vitaminA: "25%",
      vitaminC: "6%",
      calcium: "10%",
      iron: "10%"
    }
  },
  {
    id: 23,
    name: "Sausage and Cheese Keto Muffins",
    ingredients: "1/2 lb ground sausage, 1 cup almond flour, 1/2 cup shredded cheddar cheese, 1/4 cup grated Parmesan, 3 eggs, 1/4 cup heavy cream, 1 tsp baking powder, salt, and pepper",
    image: SausageAndCheeseKetoMuffinsImage,
    isFavorite: false,
    vegetarian: false,
    keto: true,
    pescatarian: false,
    recommendedFood: false,
    breakfast: true,
    nutrition: {
      servings: 6,
      calories: 315,
      totalFat: "25g",
      saturatedFat: "10g",
      polyunsaturatedFat: "3g",
      monounsaturatedFat: "9g",
      transFat: "0g",
      cholesterol: "185mg",
      sodium: "450mg",
      potassium: "125mg",
      totalCarbs: "4g",
      dietaryFiber: "2g",
      sugars: "1g",
      protein: "18g",
      vitaminA: "8%",
      vitaminC: "0%",
      calcium: "15%",
      iron: "10%"
    }
  },
  {
    id: 24,
    name: "Keto Ham and Egg Cups",
    ingredients: "12 slices of ham (thinly sliced), 12 eggs, 1/2 cup chopped spinach, 1/4 cup chopped bell peppers, 1/2 cup shredded mozzarella cheese, salt, and pepper",
    image: KetoHamAndEggCupsImage,
    isFavorite: false,
    vegetarian: false,
    keto: true,
    pescatarian: false,
    recommendedFood: false,
    breakfast: true,
    nutrition: {
      servings: 12,
      calories: 110,
      totalFat: "7g",
      saturatedFat: "3g",
      polyunsaturatedFat: "1g",
      monounsaturatedFat: "2g",
      transFat: "0g",
      cholesterol: "190mg",
      sodium: "320mg",
      potassium: "90mg",
      totalCarbs: "1g",
      dietaryFiber: "0g",
      sugars: "1g",
      protein: "10g",
      vitaminA: "6%",
      vitaminC: "8%",
      calcium: "8%",
      iron: "5%"
    }
  },
  {
    id: 25,
    name: "Carrot and Hummus Dip",
    ingredients: "2 large carrots (cut into sticks), 1/2 cup hummus",
    image: CarrotAndHummusDipImage,
    isFavorite: false,
    vegetarian: true,
    keto: false,
    pescatarian: true,
    recommendedFood: false,
    snak:true,
    nutrition: {
      servings: 1,
      calories: 210,
      totalFat: "12g",
      saturatedFat: "2g",
      polyunsaturatedFat: "3g",
      monounsaturatedFat: "7g",
      transFat: "0g",
      cholesterol: "0mg",
      sodium: "320mg",
      potassium: "280mg",
      totalCarbs: "24g",
      dietaryFiber: "6g",
      sugars: "5g",
      protein: "6g",
      vitaminA: "220%",
      vitaminC: "12%",
      calcium: "4%",
      iron: "8%"
    }
  },
  {
    id: 26,
    name: "Greek Yogurt and Berry Parfait",
    ingredients: "1 cup Greek yogurt, 1/2 cup mixed berries (blueberries, strawberries), 1/4 cup granola",
    image: GreekYogurtAndBerryParfaitImage,
    isFavorite: false,
    vegetarian: true,
    keto: false,
    pescatarian: true,
    recommendedFood: false,
    snak:true,
    nutrition: {
      servings: 1,
      calories: 290,
      totalFat: "4g",
      saturatedFat: "1g",
      polyunsaturatedFat: "1g",
      monounsaturatedFat: "1g",
      transFat: "0g",
      cholesterol: "10mg",
      sodium: "65mg",
      potassium: "345mg",
      totalCarbs: "49g",
      dietaryFiber: "4g",
      sugars: "34g",
      protein: "20g",
      vitaminA: "1%",
      vitaminC: "60%",
      calcium: "20%",
      iron: "6%"
    }
  },
  {
    id: 27,
    name: "Apple Slices with Almond Butter",
    ingredients: "1 large apple (sliced), 2 tbsp almond butter",
    image: AppleSlicesWithAlmondButterImage,
    isFavorite: false,
    vegetarian: true,
    keto: false,
    pescatarian: true,
    recommendedFood: false,
    snak:true,
    nutrition: {
      servings: 1,
      calories: 280,
      totalFat: "16g",
      saturatedFat: "2g",
      polyunsaturatedFat: "4g",
      monounsaturatedFat: "10g",
      transFat: "0g",
      cholesterol: "0mg",
      sodium: "1mg",
      potassium: "250mg",
      totalCarbs: "31g",
      dietaryFiber: "6g",
      sugars: "22g",
      protein: "7g",
      vitaminA: "1%",
      vitaminC: "8%",
      calcium: "8%",
      iron: "6%"
    }
  },
  {
    id: 28,
    name: "Turkey Roll-Ups",
    ingredients: "4 slices of turkey breast (100g), 1/4 cup cream cheese, 1/4 cup spinach leaves, 1/4 cup shredded carrots",
    image: TurkeyRollUpsImage,
    isFavorite: false,
    vegetarian: false,
    keto: true,
    pescatarian: false,
    recommendedFood: false,
    snak:true,
    nutrition: {
      servings: 1,
      calories: 300,
      totalFat: "15g",
      saturatedFat: "9g",
      polyunsaturatedFat: "1g",
      monounsaturatedFat: "4g",
      transFat: "0g",
      cholesterol: "80mg",
      sodium: "1250mg",
      potassium: "300mg",
      totalCarbs: "5g",
      dietaryFiber: "1g",
      sugars: "3g",
      protein: "35g",
      vitaminA: "50%",
      vitaminC: "2%",
      calcium: "4%",
      iron: "10%"
    }
  },
  {
    id: 29,
    name: "Cottage Cheese and Pineapple",
    ingredients: "1 cup low-fat cottage cheese, 1/2 cup pineapple chunks",
    image: CottageCheeseAndPineappleImage,
    isFavorite: false,
    vegetarian: true,
    keto: false,
    pescatarian: true,
    recommendedFood: false,
    snak:true,
    nutrition: {
      servings: 1,
      calories: 300,
      totalFat: "2g",
      saturatedFat: "1g",
      polyunsaturatedFat: "0g",
      monounsaturatedFat: "0g",
      transFat: "0g",
      cholesterol: "10mg",
      sodium: "500mg",
      potassium: "100mg",
      totalCarbs: "30g",
      dietaryFiber: "1g",
      sugars: "28g",
      protein: "28g",
      vitaminA: "2%",
      vitaminC: "80%",
      calcium: "20%",
      iron: "0%"
    }
  },
  {
    id: 30,
    name: "Edamame with Sea Salt",
    ingredients: "1 cup cooked edamame, 1/4 tsp sea salt",
    image: EdamameWithSeaSaltImage,
    isFavorite: false,
    vegetarian: true,
    keto: false,
    pescatarian: true,
    recommendedFood: false,
    snak:true,
    nutrition: {
      servings: 1,
      calories: 300,
      totalFat: "8g",
      saturatedFat: "1g",
      polyunsaturatedFat: "3g",
      monounsaturatedFat: "2g",
      transFat: "0g",
      cholesterol: "0mg",
      sodium: "200mg",
      potassium: "700mg",
      totalCarbs: "28g",
      dietaryFiber: "13g",
      sugars: "3g",
      protein: "22g",
      vitaminA: "10%",
      vitaminC: "15%",
      calcium: "8%",
      iron: "20%"
    }
  }
];

export default FoodItem