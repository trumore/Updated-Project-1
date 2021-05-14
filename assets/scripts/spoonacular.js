// var apiKey = "0b52128a7a6341f58a4008807c5a9bca";
var apiKey = "a4665615a30f4922b1cdd9ba14a85e5c";
// var apiKey = "872bc99d756a4f50a85f8f88f801cdb5";
// var apiKey = "ad074955fa2a4c79a5b3f5d5a65fc461";



var ingredientButton = document.getElementById("submit-button");

//Input button on click
//  var ingredient= "ingredient".value();

function getIngredient() {
  event.preventDefault();
  var ingredientSearch = document.getElementById("search-input").value;
  var requestUrl =
    "https://api.spoonacular.com/recipes/findByIngredients?apiKey=a4665615a30f4922b1cdd9ba14a85e5c&ingredients=" +
    ingredientSearch +
    "&number=1";
  
  // console.log("click");
  // console.log(ingredientSearch);
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderRecipe(data);
    });
    

}



function renderRecipe(data) {
  var recipeTitle = data[0].title;
  var imageUrl = data[0].image;
  var dishImage = document.createElement('img');
  var dishDescription = data[0].title;
  var recipeSection = document.getElementById('recipe-section');
  var sectionImage = document.getElementsByTagName('img')
  var usedIngredientCount = data[0].usedIngredientCount;
  var missedIngredientCount = data[0].missedIngredientCount;
  var imageUrl = data[0].image
  document.getElementById('recipe-header').textContent = recipeTitle;
  // dishImage.setAttribute('src', imageUrl);
  // dishImage.setAttribute('alt', dishDescription);
  // dishImage.setAttribute('id', 'dish-image');
  // sectionImage.append(dishImage);
  document.getElementById('recipe-image').setAttribute('src', imageUrl);
  var idEl = data[0].id;
  console.log(idEl);
  var instructionUrl = "https://api.spoonacular.com/recipes/" + idEl + "/analyzedInstructions?apiKey=a4665615a30f4922b1cdd9ba14a85e5c";
    console.log(instructionUrl);


  var ingredientsList = document.createElement('p');
    ingredientsList.setAttribute('id', 'ingredients-list');
    recipeSection.appendChild(ingredientsList);

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