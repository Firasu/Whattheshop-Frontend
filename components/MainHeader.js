import React, { Component } from "react";
import { StyleSheet, Styles } from "react-native";
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
          <Text style={styles.logo}> The Experts </Text>
        </Body>
        <Right />
      </Header>
    );
  }
}
const styles = StyleSheet.create({
  logo: {
    color: "#5F9EA0",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 }
  }
});
export default withRouter(MainHeader);
