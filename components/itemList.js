import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Content, Card, CardItem, Body } from "native-base";
import { observer } from "mobx-react";

// Components
import ItemCard from "./itemCard";
import expertStore from "../stores/expertStore";

class itemList extends Component {
  render() {
    const itemCards = itemStore.items.map(item => (
      <ItemCard key={item.first_name} item={item} />
    ));

    return <View>{itemCards}</View>;
  }
}

export default observer(itemList);
