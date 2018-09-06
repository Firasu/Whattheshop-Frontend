import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Content, Card, CardItem, Body } from "native-base";
import { observer } from "mobx-react";

// Components
import ExpertCard from "./expertCard";
import expertStore from "../stores/expertStore";

class expertList extends Component {
  render() {
    const expertCards = expertStore.experts.map(expert => (
      <ExpertCard key={expert.first_name} expert={expert} />
    ));

    return <View>{expertCards}</View>;
  }
}

export default observer(expertList);
