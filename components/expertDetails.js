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
    // //items
    // const itemID = this.props.match.params.id;
    // const item = expertStore.getItembyID(itemID);
    return (
      <ScrollView>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: expert.photo }} />
              <Body>
                <Text>
                  {expert.first_name} {expert.last_name}
                </Text>
                <Text note>{expert.qualification}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: expert.photo }}
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

export default observer(ExpertDetails);
