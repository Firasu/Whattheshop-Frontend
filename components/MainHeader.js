import React, { Component } from "react";

// NativeBase
import {
  Header,
  Body,
  Text,
  Left,
  Button,
  Icon,
  Right,
  Image
} from "native-base";

// Routing
import { withRouter } from "react-router-native";

class MainHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.history.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          {/* <Image
            source={{
              uri:
                "https://www.google.com.kw/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwju4aPTq6HdAhWQKVAKHYI_AwsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F336541%2Faccount_find_man_person_profile_search_user_icon&psig=AOvVaw2h7drFsoacBwMIhY_Ka4Ch&ust=1536150208497113"
            }}
          /> */}
        </Body>

        <Right />
      </Header>
    );
  }
}

export default withRouter(MainHeader);
