import React, { Component } from "react";
import { observer } from "mobx-react";
import { Image, ScrollView, Stylesheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

//store
import expertStore from "../stores/expertStore";

class ExpertDetails extends Component {
  render() {
    const expertID = this.props.match.params.id;
    const expert = expertStore.getExpertbyID(expertID);
    console.log(expert.items);
    return <Text> {expert.first_name}</Text>;
  }
}

export default observer(ExpertDetails);
