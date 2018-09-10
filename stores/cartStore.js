import React, { Component } from "react";
import { decorate, observable, action, computed } from "mobx";
import { observer } from "mobx-react";
import axios from "axios";
//stores
import expertStore from "./expertStore";

const instance = axios.create({ baseURL: "http://192.168.100.113:8000/api" });

class CartStore {
  constructor() {
    this.cart = [];
    this.order = {};
    this.quantity = 0;
  }

  handleOrder(id) {
    item = expertStore.getItembyID(id);
    const order = this.cart.push(item);
    this.quantity += 1;
    this.order = order;
  }

  handleRemoval(id) {
    item = expertStore.getItembyID(id);
    const edited_order = this.cart.splice(this.cart.indexOf(item), 1);
    this.quantity -= 1;
    this.order = edited_order;
  }

  getAllOfferedItems() {
    return expertStore.items;
  }

  getItembyID(id) {
    const wantedItem = expertStore.items.find(item => +item.id === +id);
    return wantedItem;
  }
  submitOrder() {
    return instance
      .post("/order", {
        id: id,
        quantity: quantity
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <Text>
        {" "}
        {this.order.map((item, index) => this.renderItem(item, index))}{" "}
      </Text>
    );
  }
}

decorate(CartStore, {
  item: observable,
  quantity: observable,
  handleOrder: observable,
  getItembyID: action
});

const cartStore = new CartStore();
export default cartStore;
