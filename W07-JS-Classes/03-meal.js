const meal = {
    "idMeal": "52867",
    "strMeal": "Vegetarian Chilli",
    "strDrinkAlternate": null,
    "strCategory": "Vegetarian",
    "strArea": "British",
    "strInstructions": "Heat oven to 200C/180C fan/ gas 6. Cook the vegetables in a casserole dish for 15 mins. Tip in the beans and tomatoes, season, and cook for another 10-15 mins until piping hot. Heat the pouch in the microwave on High for 1 min and serve with the chilli.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/wqurxy1511453156.jpg",
    "strTags": "Chilli",
    "strYoutube": "https://www.youtube.com/watch?v=D0bFRVH_EqU",
    "strIngredient1": "Roasted Vegetables",
    "strIngredient2": "Kidney Beans",
    "strIngredient3": "Chopped Tomatoes",
    "strIngredient4": "Mixed Grain",
    "strIngredient5": "",
    "strIngredient6": "",
    "strIngredient7": "",
    "strIngredient8": "",
    "strIngredient9": "",
    "strIngredient10": "",
    "strIngredient11": "",
    "strIngredient12": "",
    "strIngredient13": "",
    "strIngredient14": "",
    "strIngredient15": "",
    "strIngredient16": "",
    "strIngredient17": "",
    "strIngredient18": "",
    "strIngredient19": "",
    "strIngredient20": "",
    "strMeasure1": "400g",
    "strMeasure2": "1 can ",
    "strMeasure3": "1 can ",
    "strMeasure4": "1 Packet",
    "strMeasure5": "",
    "strMeasure6": "",
    "strMeasure7": "",
    "strMeasure8": "",
    "strMeasure9": "",
    "strMeasure10": "",
    "strMeasure11": "",
    "strMeasure12": "",
    "strMeasure13": "",
    "strMeasure14": "",
    "strMeasure15": "",
    "strMeasure16": "",
    "strMeasure17": "",
    "strMeasure18": "",
    "strMeasure19": "",
    "strMeasure20": "",
    "strSource": "https://www.bbcgoodfood.com/recipes/veggie-chilli",
    "strImageSource": null,
    "strCreativeCommonsConfirmed": null,
    "dateModified": null
  }

  console.log("---------1--------");
  for (let key in meal) {
    // console.log('key is', key)

    if (meal[key] && key.includes('strIngredient')) {
        console.log(meal[key]);
    }
  }

  const entries = Object.entries(meal)
//   console.log("🚀 ~ entries", entries)

  entries.forEach(item => {
      
      if (item[1] && item[0].includes('strIngredient')) {
          
          console.log("🚀 ~ item", item[1])
    }
})

entries.forEach(item => {
    if (item[1] && item[0].includes('strMeasure')) {
          
        console.log("🚀 ~ item", item[1])
  }
})

console.log('Object is', Object);