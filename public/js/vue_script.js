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


let menuItem1 = new menuItem("Moo Kids Meal", false, false , "Unusual taste", "1200 kCal", "https://i.ytimg.com/vi/FJM6wd0ehWQ/maxresdefault.jpg");
let menuItem2 = new menuItem("Torpedo Meal", true, false , "Chefs choice", "2001 kCal", "http://3.bp.blogspot.com/_j1v_Cj26Tyk/TPCOdCKGKRI/AAAAAAAAAFs/MoTq035wB60/s1600/Burger1996.jpg");
let menuItem3 = new menuItem("The Bleeder", true, true , "Found outside kitchen", "980 kCal", "https://media-cdn.tripadvisor.com/media/photo-s/08/54/51/6e/nasty-burger.jpg");
let menuItem4 = new menuItem("Money Shot Meal", false, true, "For your enemies", "-100 hp", " ");
let menuItem5 = new menuItem("Heart Stopper", false, false,  "New and funky", "555 kCal", " ");



const vm = new Vue({
el: '#myID',
data: {
titel: 'Välj en burgare',
burgers: [menuItem1, menuItem2, menuItem3, menuItem4, menuItem5]
}
})