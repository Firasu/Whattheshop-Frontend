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

// class SearchBar extends React.Component {
//   render() {
//     return (
//       <Form>
//         <View>
//           <Input type="text" placeholder="Search..." />
//         </View>
//       </Form>
//     );
//   }
// }

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVisible: false
    };
  }

  // toggle visibility when run on the state
  showSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible
    });
  }

  render() {
    // Classes to add to the <Input /> element
    let searchInputClasses = ["searchInput"];

    // Update the class array if the state is visible
    if (this.state.searchVisible) {
      searchInputClasses.push("active");
    }

    return (
      <View className="header">
        <View className="fa fa-more" />

        <Input
          type="text"
          className={searchInputClasses.join(" ")}
          placeholder="Search ..."
        />

        {/* Adding an onClick handler to call the showSearch button */}
        <View
          onClick={this.showSearch.bind(this)}
          className="fa fa-search searchIcon"
        />
      </View>
    );
  }
}

export default SearchBar;
