import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link, Redirect } from "react-router-native";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";
// Store
import authStore from "../stores/authStore";

class RegistrationForm extends Component {
  render() {
    return (
      <View style={styles.form}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.icon}
            source={require("../images/Experts.png")}
          />
          <Text style={styles.header}> Register.</Text>
          <TextInput
            onChangeText={username => this.setState({ username })}
            style={styles.textInput}
            placeholder="Username"
            returnKeyType={"next"}
            onSubmitEditing={() => {
              this.secondTextInput.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            ref={input => {
              this.secondTextInput = input;
            }}
            returnKeyType={"next"}
            onSubmitEditing={() => {
              this.thirdTextInput.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            onChangeText={password => this.setState({ password })}
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Password"
            secureTextEntry={true}
            ref={input => {
              this.thirdTextInput = input;
            }}
          />
          <Link
            to="/profile/"
            component={TouchableOpacity}
            style={styles.buttonContainer}
            autoCapitalize="none"
            onPress={() => {
              authStore.registerUser(this.state.username, this.state.password);
            }}
          >
            <Text style={styles.buttonText}> Sign Up </Text>
          </Link>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingVertical: 80,
    paddingHorizontal: 20,
    alignSelf: "stretch"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  icon: {
    width: 100,
    height: 100
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomWidth: 1
  },
  textInput: {
    alignSelf: "stretch",
    marginBottom: 30,
    height: 40,
    borderBottomColor: "#5F9EA0",
    borderBottomWidth: 1
  },
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
export default observer(RegistrationForm);
