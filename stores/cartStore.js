import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { decorate, observable, action, computed } from "mobx";
import { observer } from "mobx-react";
import axios from "axios";
//stores
import expertStore from "./expertStore";
import authStore from "./authStore";

const instance = axios.create({ baseURL: "http://192.168.100.113:8000/api" });

class CartStore {
  constructor() {
    this.cart = [];
    this.order = {};
    this.orderHistory = null;
  }

  handleOrder(id) {
    let item = expertStore.getItembyID(id);
    let cartItem = this.cart.find(cartItem => cartItem.id === item.id);

    if (cartItem !== undefined) {
      cartItem.quantity++;
    } else {
      this.cart.push({ ...item, quantity: 1 });
    }
    this.saveCart();
  }

  handleRemoval(id) {
    let toBeRemoved = this.cart.find(item => item.id === id);
    this.cart.splice(this.cart.indexOf(toBeRemoved), 1);
    this.saveCart();
  }
  saveCart() {
    AsyncStorage.setItem("cart", JSON.stringify(this.cart));
  }
  grabCart() {
    AsyncStorage.getItem("cart").then(item => {
      if (item !== null && item !== undefined) {
        this.cart = JSON.parse(item);
      }
    });
  }
  getAllOfferedItems() {
    return expertStore.items;
  }

  getItembyID(id) {
    const wantedItem = expertStore.items.find(item => +item.id === +id);
    return wantedItem;
  }
  //---------------------------SUBMIT ORDER-------------------------//
  submitOrder(id, quantity, history) {
    return instance
      .post("/order/", {
        id: id,
        quantity: quantity,
        history: history
      })
      .then(function(response) {
        console.log(response);
        AsyncStorage.removeItem("cart");
        history.push("/expertList");
      })
      .catch(function(error) {
        console.log(error);
        history.push("/expertList");
      });
  }
  //----------------------ORDER HISTORY BY USER-------------------//
  getOrderHistory() {
    return instance
      .get("/orderlist/?format=json")
      .then(res => res.data)
      .then(history => {
        this.orderHistory = history;
      })
      .catch(err => console.error(err));
  }
}

decorate(CartStore, {
  item: observable,
  quantity: observable,
  cart: observable,
  handleOrder: action,
  handleRemoval: action,
  submitOrder: action,
  getItembyID: action,
  order: observable,
  orderHistory: observable
});

const cartStore = new CartStore();
export default cartStore;
