// var apiKey = "0b52128a7a6341f58a4008807c5a9bca";
// var apiKey = "a4665615a30f4922b1cdd9ba14a85e5c";
var apiKey = "872bc99d756a4f50a85f8f88f801cdb5";
// var apiKey = "ad074955fa2a4c79a5b3f5d5a65fc461";



var ingredientButton = document.getElementById("submit-button");

//Input button on click
//  var ingredient= "ingredient".value();

function getIngredient() {
  event.preventDefault();
  var ingredientSearch = document.getElementById("search-input").value;
  var requestUrl =
    "https://api.spoonacular.com/recipes/findByIngredients?apiKey=872bc99d756a4f50a85f8f88f801cdb5&ingredients=" +
    ingredientSearch +
    "&number=1";
  
  // console.log("click");
  // console.log(ingredientSearch);
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderRecipe(data);
    });
    

}



function renderRecipe(data) {
  var recipeTitle = data[0].title;
  var imageUrl = data[0].image;
  var recipeSection = document.getElementById('recipe-section');
  var usedIngredientCount = data[0].usedIngredientCount;
  var missedIngredientCount = data[0].missedIngredientCount;
  var imageUrl = data[0].image
  document.getElementById('recipe-header').textContent = recipeTitle;

  document.getElementById('recipe-image').setAttribute('src', imageUrl);
  var idEl = data[0].id;
  console.log(idEl);
  var instructionUrl = "https://api.spoonacular.com/recipes/" + idEl + "/analyzedInstructions?apiKey=872bc99d756a4f50a85f8f88f801cdb5";

    fetch(instructionUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById('instructions-list').innerHTML ="";
      for (let i = 0; i < data[0].steps[i].step.length; i+=1) {
        var insructions = data[0].steps[i].step;
        console.log (insructions)
        document.getElementById('instructions-list').innerHTML += "<li>" + insructions + "</li>";
      }
    });


  var ingredientsList = document.createElement('p');
    ingredientsList.setAttribute('id', 'ingredients-list');
    recipeSection.appendChild(ingredientsList);
    document.getElementById('ingredients-list').innerHTML =""; 
    document.getElementById('ingredients-needed').innerHTML ="";

  for (let i = 0; i < usedIngredientCount; i++) {
    var usedIngredient = data[0].usedIngredients[i].original
    console.log(usedIngredient)
    document.getElementById('ingredients-list').innerHTML += usedIngredient + ";" + "<br>";
  }
  
  for (let i = 0; i < missedIngredientCount; i++) {
  var missedIngredient = data[0].missedIngredients[i].original
  console.log(missedIngredient)
  document.getElementById('ingredients-needed').innerHTML += missedIngredient + ";" + "<br>";
  }
}


  

ingredientButton.addEventListener("click", getIngredient);
// sample api call formatting from the site. *this formatting works when using the apiKey var above.
//https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.
//"https://api.spoonacular.com/recipes/findByIngredients?apiKey=0b52128a7a6341f58a4008807c5a9bca&ingredients=apples,+flour,+sugar&number=1"

//GetElementById - container to display image
//  set attribute ("src", response.image)

// https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=a4665615a30f4922b1cdd9ba14a85e5c