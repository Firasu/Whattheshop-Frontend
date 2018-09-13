import React, { Component } from "react";
import { Form, Item, Input, Icon } from "native-base";
import {
  Platform,
  Animation,
  StyleSheet,
  Text,
  View,
  Header,
  Button,
  Image,
  TouchableHighlight
} from "react-native";

class SearchBar extends React.Component {
  render() {
    const list = this.props.list;
    return (
      <Form>
        <View>
          <Input
            type="text"
            placeholder="Search..."
            onChangeText={e => (list.query = e)}
          />
        </View>
      </Form>
    );
  }
}

export default SearchBar;
