var apiKey = "0b52128a7a6341f58a4008807c5a9bca";
var ingredientButton = document.getElementById("submit-button");

//Input button on click
//  var ingredient= "ingredient".value();

function getIngredient() {
    event.preventDefault();
    var ingredientSearch = document.getElementById("search-input").value;
    //var requestUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=0b52128a7a6341f58a4008807c5a9bca&ingredients=" + ingredientSearch + "&number=1"
    console.log("click");
    console.log(ingredientSearch);
    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        
    })
};


ingredientButton.addEventListener("click", getIngredient);
// sample api call formatting from the site. *this formatting works when using the apiKey var above.
//https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.
//"https://api.spoonacular.com/recipes/findByIngredients?apiKey=0b52128a7a6341f58a4008807c5a9bca&ingredients=apples,+flour,+sugar&number=1"

//GetElementById - container to display image
//  set attribute ("src", response.image)

//4aae36be2d19435e91736ce8e7711fee
//872bc99d756a4f50a85f8f88f801cdb5
//ad074955fa2a4c79a5b3f5d5a65fc461

