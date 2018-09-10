import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

// NativeBase
import { Footer, FooterTab, Icon, Button, Text } from "native-base";

// Router
import { observer } from "mobx-react";
import { Link, withRouter } from "react-router-native";
//store
import cartStore from "../stores/cartStore";

class MainFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button>
            <Icon style={styles.icon} type="Octicons" name="search" />
          </Button>
          <Link component={Button} to="/profile">
            <Icon style={styles.icon} name="person" />
          </Link>
          <Link component={Button} to="/Cart">
            <Text>
              {cartStore.quantity} <Icon style={styles.icon} name="cart" />
            </Text>
          </Link>
        </FooterTab>
      </Footer>
    );
  }
}
{
}
const styles = StyleSheet.create({
  icon: {
    color: "#5F9EA0"
  }
});

export default withRouter(observer(MainFooter));
