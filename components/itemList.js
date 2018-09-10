import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Content, Card, CardItem, Body } from "native-base";
import { observer } from "mobx-react";

// Components
import ItemCard from "./ItemCard";
import expertStore from "../stores/expertStore";

class ItemList extends Component {
  render() {
    const itemCards = expertStore.items.map(item => (
      <ItemCard key={item.name} item={item} />
    ));

    return <View>{itemCards}</View>;
  }
}

export default observer(ItemList);
