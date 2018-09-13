import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { Redirect } from "react-router-native";
import { observer } from "mobx-react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity
} from "react-native";

import { ListItem, Body, List } from "react-native-elements";

import cartStore from "../stores/cartStore";
import Profile from "./Profile";

class Cart extends Component {
  renderItem(item, id) {
    if (item != null && item !== undefined) {
      return (
        <View key={"listItem" + id}>
          <ListItem
            title={item.name}
            subtitle={item.price + ` KD`}
            badge={{
              value: "Qtty: " + item.quantity,
              textStyle: { color: "#5F9EA0" },
              containerStyle: {
                marginTop: -20,
                backgroundColor: "rgba(250, 250, 250, 1)"
              }
            }}
          />
          />
        </View>
      );
    }
  }
  render() {
    cartStore.cart.map(item => console.log(item));
    return (
      <View>
        <Profile />
        <List>
          {cartStore.cart.map((item, id) => this.renderItem(item, id))}
        </List>
        ;
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            cartStore.submitOrder(item.id, item.quantity, this.props.history)
          }
        >
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: "stretch",
    margin: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "rgba(250, 250, 250, 0.6)"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#5F9EA0"
  }
});
export default observer(Cart);
