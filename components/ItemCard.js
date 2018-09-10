import React, { Component } from "react";
import { Link } from "react-router-native";
import { observer } from "mobx-react";
import { Image, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right
} from "native-base";
//store
import expertStore from "../stores/expertStore";
import cartStore from "../stores/cartStore";

class ItemCard extends Component {
  handleAdd(id) {
    cartStore.handleOrder(id);
  }
  handleRemove(id) {
    cartStore.handleRemoval(id);
  }
  render() {
    const item = this.props.item;

    return (
      <Card>
        <CardItem>
          <Left>
            {/* <Thumbnail source={{ uri: expert.photo }} /> */}
            <Body>
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text note>{item.price}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{ uri: item.photo }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Right>
            <Button
              transparent
              onPress={() => {
                this.handleAdd(item.id);
              }}
            >
              <Icon active name="add" />
              <Text>Add</Text>
            </Button>
          </Right>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.handleRemove(item.id);
              }}
            >
              <Icon active name="delete" />
              <Text>Remove</Text>
            </Button>
          </Left>

          <Body />
        </CardItem>
      </Card>
    );
  }
}

export default observer(ItemCard);
