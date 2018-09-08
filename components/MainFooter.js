import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

// NativeBase
import { Footer, FooterTab, Icon, Button } from "native-base";

// Router
import { Link } from "react-router-native";

class MainFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button>
            <Icon style={styles.icon} type="Octicons" name="search" />
          </Button>
          <Link component={Button} to="/privateLul">
            <Icon style={styles.icon} name="lock" />
          </Link>
          <Link component={Button} to="/profile">
            <Icon style={styles.icon} name="person" />
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
export default MainFooter;
