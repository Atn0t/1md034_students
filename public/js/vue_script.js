'use strict';
const socket = io();

const vm = new Vue({
    el: "main",
    data: {
        titel: "Välj en burgare",
        burgers: [food[0], food[1], food[2], food[3], food[4]],
        lactose: "lactose",
        gluten: "gluten",
        lactoseFree: "Lactose free",
        glutenFree: "Gluten free",
        firstname: "",
        email: "",
        orderpayment: "",
        gender: "",
        orderIsPlaced: false,
        checkerBoxer: [],
        orderSummary: [],
        orders: {},
        localOrder: { orderId: "T", details: { x: 0, y: 0 }, orderItems: [], orderData: [] },
        orderNum: 0,
    },

    created: function() {
        socket.on('initialize', function(data) {
            this.orders = data.orders;
        }.bind(this));
        socket.on('currentQueue', function(data) {
            this.orders = data.orders;
        }.bind(this));
    },

    methods: {
        submit: function() {
            this.checkerBoxer = [];
            this.orderIsPlaced = true;
            let chosenBox = document.getElementsByName("chosenBox");
            let checkedBoxes = [];
            let i = 0;
            for (var checked of chosenBox) {
                if (checked.checked) {
                    checkedBoxes[i] = " " + checked.value;
                    i++;
                }
            }
            console.log("submit is used");
            this.checkerBoxer += checkedBoxes;
            return (this.firstname, this.email, this.street, this.housenum, this.orderpayment, this.gender);

        },

        getNext: function() {
            this.orderNum++;
            return this.orderNum;
        },

        addOrder: function(event) {

            this.orderSummary = []; //reset the order summary of checked items
            console.log("Button clicked!");
            var checkedItems = document.getElementsByName("chosenBox");
            for (var i = 0, k = 0; i < checkedItems.length; i++) {
                if (checkedItems[i].checked == true) {
                    this.orderSummary[k] = checkedItems[i].value;
                    k++;
                }
            }
            this.localOrder.orderItems = this.orderSummary;
            this.orderIsPlaced = true;

            //klar
            socket.emit("addOrder", {
                orderId: this.getNext(),
                details: {
                    x: this.localOrder.details.x,
                    y: this.localOrder.details.y
                },
                orderItems: this.localOrder.orderItems,
                orderData: [this.firstname, this.email, this.orderpayment, this.gender],
            });
        },

        displayOrder: function(event) {
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top
            };

            this.localOrder.details.x = event.clientX - 10 - offset.x;
            this.localOrder.details.y = event.clientY - 10 - offset.y;

            console.log(this.localOrder.details);
        }
    }
});


/*

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


*/