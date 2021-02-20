let sandwichDetails = [];

function addBread() {
  var bread = document.getElementById("bread-select").value;
  document.getElementById("bread").innerHTML = bread;
  sandwichDetails[1] = document.getElementById("bread").innerHTML;
}

function addSauce() {
  if (
    document.getElementById("mayo").checked &&
    !document.getElementById("sauce").innerHTML.includes("Mayo")
  ) {
    document.getElementById("sauce").innerHTML += "Mayo ";
  } else if (
    document.getElementById("mustard").checked &&
    !document.getElementById("sauce").innerHTML.includes("Mustard")
  ) {
    document.getElementById("sauce").innerHTML += "Mustard ";
  } else if (
    document.getElementById("sriracha").checked &&
    !document.getElementById("sauce").innerHTML.includes("Sriracha")
  ) {
    document.getElementById("sauce").innerHTML += "Sriracha ";
  }

  sandwichDetails[2] = document.getElementById("sauce").innerHTML;
}

function addProtein() {

function makeProtein(proteinType){
  let protein = document.createElement("PROTEIN");
  protein.classList.add("protein", "ingredient");
  protein.innerHTML += proteinType;
  document.querySelector("#sandwichBox").appendChild(protein);
  sandwichDetails.push(protein.innerHTML);
}

  if (
    document.getElementById("ham").checked &&
    !sandwichDetails.includes("Ham")
  ) {
    makeProtein("Ham")

  } else if (
    document.getElementById("turkey").checked &&
    !sandwichDetails.includes("Turkey")
  ) {
    makeProtein("Turkey")
  } else if (
    document.getElementById("roastBeef").checked &&
    !sandwichDetails.includes("Roast Beef")
  ) {
    makeProtein("Roast Beef")
  }
}

function addCheese() {
  let cheese = document.createElement("CHEESE");
  cheese.innerHTML = "I AM CHEESE";
  cheese.classList.add("cheese", "ingredient");
  document.querySelector("#sandwichBox").appendChild(cheese);

  if (
    document.getElementById("cheddar").checked
    // &&
    // !document.getElementById("cheese").innerHTML.includes("Cheddar")
  ) {
    document.getElementsByClassName("cheese").innerHTML += "Cheddar ";
  } else if (
    document.getElementById("swiss").checked
    // &&
    // !document.getElementById("cheese").innerHTML.includes("Swiss")
  ) {
    document.getElementsByClassName("cheese").innerHTML += "Swiss ";
  } else if (
    document.getElementById("provolone").checked
    // &&
    // !document.getElementById("cheese").innerHTML.includes("Provolone")
  ) {
    document.getElementsByClassName("cheese").innerHTML += "Provolone ";
  }
  // sandwichDetails[4] = document.getElementById("cheese").innerHTML;
}

function addVeggies() {
  if (
    document.getElementById("lettuce").checked &&
    !document.getElementById("veggies").innerHTML.includes("Lettuce")
  ) {
    document.getElementById("veggies").innerHTML += "Lettuce ";
  } else if (
    document.getElementById("tomato").checked &&
    !document.getElementById("veggies").innerHTML.includes("Tomato")
  ) {
    document.getElementById("veggies").innerHTML += "Tomato ";
  } else if (
    document.getElementById("onion").checked &&
    !document.getElementById("veggies").innerHTML.includes("Onion")
  ) {
    document.getElementById("veggies").innerHTML += "Onion ";
  }
  sandwichDetails[5] = document.getElementById("veggies").innerHTML;
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
