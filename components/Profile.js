import React, { Component } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-native";
import { Avatar } from "react-native-elements";
import { StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

// NativeBase Components
import {
  Card,
  View,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Tab,
  List,
  ListItem,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

//stores
import authStore from "../stores/authStore";
import cartStore from "../stores/cartStore";

class Profile extends Component {
  componentDidMount() {
    cartStore.getOrderHistory();
  }
  render() {
    if (!authStore.user) return <Redirect to="/login" />;

    if (!cartStore.orderHistory) {
      return (
        <Card>
          {/* --------------------{avatar and user info}------------------ */}
          <CardItem>
            <Avatar
              size="xlarge"
              rounded
              title={authStore.user.username[0]}
              activeOpacity={0.7}
            />
            <Text> {authStore.user.username} </Text>
          </CardItem>
          <CardItem>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => authStore.logoutUser()}
            >
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </CardItem>
          <View> {this.history}</View>
        </Card>
      );
    } else {
      return (
        <View>
          <Card>
            {/* --------------------{avatar and user info}------------------ */}
            <CardItem>
              <Avatar
                size="xlarge"
                rounded
                title={authStore.user.username[0]}
                activeOpacity={0.7}
              />
              <Text> {authStore.user.username} </Text>
            </CardItem>
            <CardItem>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => authStore.logoutUser()}
              >
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </CardItem>
            <View> {this.history}</View>
          </Card>
          // ------------------ order history--------------------------------
          {cartStore.orderHistory.map(item => {
            if (item.order_items) {
              return item.order_items.map(orderitem => {
                console.log(orderitem);
                return (
                  <Card>
                    <CardItem body>
                      <ListItem>
                        <Text key={orderitem.id}>
                          {orderitem.item.description}
                        </Text>
                      </ListItem>
                    </CardItem>
                  </Card>
                );
              });
            }
          })}
        </View>
      );
    }
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
export default observer(Profile);
