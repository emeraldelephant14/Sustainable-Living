/* .js files add interaction to your website */

var factList = ["In America, more money is spent on fashion accessories than college tuition.", "Plastic kills 1 million seabirds every single year", "With over 3,000 active landfills in the United States, as much as 1,800,000 acres of habitat have been lost", "A study in New York found that there is a 12% increased risk of congenital malformations in children born to families that lived within a mile of a hazardous waste landfill site"];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton){
  myButton.addEventListener("click", displayFact);
}
function displayFact() {
  fact.innerHTML = factList[count];
  count++;

  if (count == factList.length) {
    count = 0;
  }
}