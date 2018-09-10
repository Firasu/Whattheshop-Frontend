import React, { Component } from "react";
import { observer } from "mobx-react";
import { Image, ScrollView, Stylesheet, View } from "react-native";
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
//Component
import ItemCard from "./ItemCard";
import ItemList from "./ItemList";

class ExpertDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expert: {}
    };
  }

  render() {
    const expertID = this.props.match.params.id;
    const expert = expertStore.getExpertbyID(expertID);
    expertStore.items = expert.items;
    return (
      <ScrollView>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: expert.photo }} />
              <Text>
                {expert.first_name} {expert.last_name}
              </Text>
            </Left>
          </CardItem>
        </Card>
        <View>
          <ItemList />
        </View>
      </ScrollView>
    );
  }
}

export default observer(ExpertDetails);
