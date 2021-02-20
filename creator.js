let sandwichDetails = [];

function makeIngredient(ingredientCategory, ingredientType){
  console.log(`makeingredient went off`)
  let ingredient = document.createElement("INGREDIENT");
  ingredient.classList.add(ingredientCategory, "ingredient");
  ingredient.innerHTML += ingredientType;
  document.querySelector("#sandwichBox").appendChild(ingredient);
  sandwichDetails.push(ingredient.innerHTML);

}


function addBread() {
  var bread = document.getElementById("bread-select").value;
  document.getElementById("bread").innerHTML = bread;
  sandwichDetails[1] = document.getElementById("bread").innerHTML;
}

function addSauce() {
  if (
    document.getElementById("mayo").checked &&
    !sandwichDetails.includes("Mayo")
  ) {
    makeIngredient("sauce", "Mayo")
  } else if (
    document.getElementById("mustard").checked &&
    !sandwichDetails.includes("Mustard")
  ) {
    makeIngredient("sauce", "Mustard")
  } else if (
    document.getElementById("sriracha").checked &&
    !sandwichDetails.includes("Sriracha")
  ) {
    makeIngredient("sauce", "Mustard")
  }
}


function addProtein() {
  if (
    document.getElementById("ham").checked &&
    !sandwichDetails.includes("Ham")
  ) {
    makeIngredient("protein", "Ham")

  } else if (
    document.getElementById("turkey").checked &&
    !sandwichDetails.includes("Turkey")
  ) {
    makeIngredient("protein", "Turkey")
  } else if (
    document.getElementById("roastBeef").checked &&
    !sandwichDetails.includes("Roast Beef")
  ) {
    makeIngredient("protein", "Roast Beef")
  }
}

function addCheese() {
  if (
    document.getElementById("cheddar").checked &&
    !sandwichDetails.includes("Cheddar")
  ) {
    makeIngredient("cheese", "Cheddar")
  } else if (
    document.getElementById("swiss").checked &&
    !sandwichDetails.includes("Swiss")
  ) {
    makeIngredient("cheese", "Swiss")
  } else if (
    document.getElementById("provolone").checked &&
    !sandwichDetails.includes("Provolone")
  ) {
    makeIngredient("cheese", "Provolone")
  }
}

function addVeggies() {
  if (
    document.getElementById("lettuce").checked &&
    !sandwichDetails.includes("Lettuce")
  ) {
    makeIngredient("veggies", "Lettuce")
  } else if (
    document.getElementById("tomato").checked &&
    !sandwichDetails.includes("Tomato")
  ) {
    makeIngredient("veggies", "Tomato")
  } else if (
    document.getElementById("onion").checked &&
    !sandwichDetails.includes("Onion")
  ) {
    makeIngredient("veggies", "Onion")
  }
}

function saveSandwich() {
  sandwichDetails[0] = document.getElementById(`sandwich-name`).value;

  let ingredientCount = 0;

  for (let i = 0; i < sandwichDetails.length; i++) {
    ingredientCount += sandwichDetails[i].split(" ").length - 1;
    if (sandwichDetails[i].includes("Roast Beef")) {
      ingredientCount -= 1;
    }
  }

  document.getElementById(
    "sandwich-description"
  ).innerHTML = `Mmmm... the ${sandwichDetails[0]}, a sandwich made with ${sandwichDetails[1]}, some ${sandwichDetails[2]}, hearty ${sandwichDetails[3]}, ${sandwichDetails[4]}, and finally some ${sandwichDetails[5]}. Sounds Delicious! You used ${ingredientCount} ingredients.`;

  /*
when an ingredient is added, it will receive an ingredient number
the ingredient numbers will start from the bottom of the sandwich
when save button is clicked, the appropriate css class to position the ingredient will be applied
there will be a function that loops ingredient Count times
    this function will, 
*/

  // for (let i = 0; i < array.length; i++) {
  //   const element = array[i];

  // }
  let ingredientDiv = document.getElementsByClassName("ingredient")[0];
  let ingredientDiv2 = document.getElementsByClassName("ingredient")[1];
  // let proteinDiv3 = document.getElementsByClassName("protein")[2]

  ingredientDiv.classList.add("bounce-1");
  ingredientDiv2.classList.add("bounce-2");
  // proteinDiv3.classList.add("bounce-1");

  console.log(document.getElementById("sandwich-description").innerHTML);
}
