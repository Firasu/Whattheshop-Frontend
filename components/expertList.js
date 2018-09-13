import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Content, Card, CardItem, Body } from "native-base";
import { observer } from "mobx-react";

// Components
import ExpertCard from "./expertCard";
import ItemCard from "./ItemCard";
import expertStore from "../stores/expertStore";
import SearchBar from "./SearchBar";

class expertList extends Component {
  render() {
    const expertCards = expertStore.filteredExperts.map(expert => (
      <ExpertCard key={expert.first_name + expert.last_name} expert={expert} />
    ));

    return (
      <View>
        <SearchBar store={expertStore} />
        <View> {expertCards} </View>
      </View>
    );
  }
}

export default observer(expertList);
