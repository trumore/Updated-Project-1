var apiKey = "0b52128a7a6341f58a4008807c5a9bca";
var ingredientSearch = document.getElementById("submit-button")

//Input button on click
//  var ingredient= "ingredient".value();

function getIngredient() {
    var requestUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=0b52128a7a6341f58a4008807c5a9bca&ingredients=apples,+flour,+sugar&number=1"
    console.log("click");
    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        

    })
};


ingredientSearch.addEventListener("click", getIngredient);
// sample api call formatting from the site. *this formatting works when using the apiKey var above.
//https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.
//"https://api.spoonacular.com/recipes/findByIngredients?apiKey=0b52128a7a6341f58a4008807c5a9bca&ingredients=apples,+flour,+sugar&number=1"

//GetElementById - container to display image
//  set attribute ("src", response.image)