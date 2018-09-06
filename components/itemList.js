import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Content, Card, CardItem, Body } from "native-base";
import { observer } from "mobx-react";

// Components
import itemCard from "./itemCard";
import itemStore from "../stores/itemStore";

class itemList extends Component {
  render() {
    const items = itemStore.items.map(item => (
      <ItemCard key={item.name} item={item} />
    ));
    return <View>{itemCards}</View>;
  }
}

export default observer(itemList);
