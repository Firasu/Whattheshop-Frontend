import React, { Component } from "react";
import { Link } from "react-router-native";
import { observer } from "mobx-react";
import { Image, ScrollView } from "react-native";
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

class ItemCard extends Component {
  render() {
    let item = this.props.item;

    return (
      <ScrollView>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: item.photo }} />
              <Body>
                <Link to={`/expertDetails/${item.id}`}>
                  <Text>{item.name}</Text>
                </Link>
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
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Icon active name="clock" />
                <Text>{expert.years_experience}</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}

export default observer(ItemCard);
