function menuItem(itemName, lactose, gluten, itemInfo, itemStat, itemImg) {
    this.itemName = itemName;
    this.lactose = lactose;
    this.gluten = gluten;
    this.itemInfo = itemInfo;
    this.itemStat = itemStat;
    this.itemImg = itemImg;
  }

function nameAndKcal(menuItem) {
    return menuItem.itemName + ' ' + menuItem.itemStat;
}

let menuItem1 = new menuItem("Moo Kids Meal", false, false , "For them kids", "480 kCal", "https://vignette.wikia.nocookie.net/gtawiki/images/6/69/BurgerShot-GTASA-MooKidsMeal.jpg/revision/latest/scale-to-width-down/185?cb=20100220130044");
let menuItem2 = new menuItem("Torpedo Meal", true, false , "Serial killer good!", "1001 kCal", "https://vignette.wikia.nocookie.net/gtawiki/images/3/36/BurgerShot-GTASA-MeatStack.jpg/revision/latest/scale-to-width-down/185?cb=20100220130137");
let menuItem3 = new menuItem("The Bleeder", true, true , "Leaves you bleeding!", "980 kCal", "https://vignette.wikia.nocookie.net/gtawiki/images/3/36/BurgerShot-GTASA-MeatStack.jpg/revision/latest/scale-to-width-down/185?cb=20100220130137");
let menuItem4 = new menuItem("Money Shot Meal", false, true, "For your enemies", "-100 hp", "https://vignette.wikia.nocookie.net/gtawiki/images/e/e3/BurgerShot-GTASA-BeefTower.jpg/revision/latest/scale-to-width-down/185?cb=20100220130108");
let menuItem5 = new menuItem("Salad Meal", false, false,  "For the picky ones", "555 kCal", "https://vignette.wikia.nocookie.net/gtawiki/images/1/10/BurgerShot-GTASA-SaladMeal.jpg/revision/latest/scale-to-width-down/185?cb=20100220130014");





/*
var id = document.getElementById("wrapp");
let burgers = [menuItem1, menuItem2, menuItem3, menuItem4, menuItem5]


for (var burger of burgers) {
let div = document.createElement("div");
div.className = "cellItem";


  let listItem = document.createElement("H1");
  let listValue = document.createTextNode(burger.itemName);
  listItem.appendChild(listValue);
  div.appendChild(listItem);

  let pic = document.createElement("img");
  pic.src = burger.itemImg;
  pic.setAttribute("width", 300);
  pic.setAttribute("height", 200);
  div.appendChild(pic);
  
  let ul = document.createElement("ul");

  let info = document.createElement("li");
  info.appendChild(document.createTextNode(burger.itemInfo));
  ul.appendChild(info);
  
  let stats = document.createElement("li");
  stats.appendChild(document.createTextNode(burger.itemStat));
  ul.appendChild(stats);
 
 if(burger.lactose){
 let lactose = document.createElement("li");
 lactose.appendChild(document.createTextNode("Contains lactose"));
 ul.appendChild(lactose);
 }
 
if(burger.gluten){
 let gluten = document.createElement("li");
 gluten.appendChild(document.createTextNode("Contains gluten"));
 ul.appendChild(gluten);
}

div.appendChild(ul);
id.appendChild(div);

}

*/
