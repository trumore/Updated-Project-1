var apiKey = "0b52128a7a6341f58a4008807c5a9bca";

fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey=0b52128a7a6341f58a4008807c5a9bca&ingredients=apples,+flour,+sugar&number=1")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
})

// sample api call formatting from the site. *this formatting works when using the above api
//https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.