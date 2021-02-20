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

  let protein = document.createElement('PROTEIN')
  protein.innerHTML = "I AM PROTEIN"
  protein.classList.add("protein", "ingredient")
  document.querySelector('#sandwichBox').appendChild(protein)


  if (
    document.getElementById("ham").checked
    //  &&
    // !document.getElementById("protein").innerHTML.includes("Ham")
  ) {
    document.getElementsByClassName("protein").innerHTML += "Ham ";
  } else if (
    document.getElementById("turkey").checked
    //  &&
    // !document.getElementsByClassName("protein").innerHTML.includes("Turkey")
  ) {
    document.getElementsByClassName("protein").innerHTML += "Turkey ";
  } else if (
    document.getElementById("roastBeef").checked
    //  &&
    // !document.getElementsByClassName("protein").innerHTML.includes("Roast Beef")
  ) {
    document.getElementsByClassName("protein").innerHTML += "Roast Beef ";
  }
  // sandwichDetails[3] = document.getElementById("protein").innerHTML;
}

function addCheese() {
  if (
    document.getElementById("cheddar").checked &&
    !document.getElementById("cheese").innerHTML.includes("Cheddar")
  ) {
    document.getElementById("cheese").innerHTML += "Cheddar ";
  } else if (
    document.getElementById("swiss").checked &&
    !document.getElementById("cheese").innerHTML.includes("Swiss")
  ) {
    document.getElementById("cheese").innerHTML += "Swiss ";
  } else if (
    document.getElementById("provolone").checked &&
    !document.getElementById("cheese").innerHTML.includes("Provolone")
  ) {
    document.getElementById("cheese").innerHTML += "Provolone ";
  }
  sandwichDetails[4] = document.getElementById("cheese").innerHTML;
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
let proteinDiv = document.getElementsByClassName("protein")[0]


proteinDiv.classList.add("bounce-1");


  console.log(document.getElementById("sandwich-description").innerHTML);
}
