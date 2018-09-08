import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link, Redirect } from "react-router-native";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

// Store
import authStore from "../stores/authStore";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    if (authStore.isAuthenticated) return <Redirect to="/profile" />;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.icon}
            source={require("../images/Experts.png")}
          />
          <Text style={styles.title}>
            Login to browse & book experts today.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            returnKeyType={"next"}
            onSubmitEditing={() => {
              this.secondTextInput.focus();
            }}
            blurOnSubmit={false}
            style={styles.input}
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
            ref={input => {
              this.secondTextInput = input;
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          full
          onPress={() => {
            authStore.loginUser(this.state.username, this.state.password);
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Link style={styles.buttonContainer} full to="/register">
          <Text style={styles.buttonText}>Register</Text>
        </Link>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 80,
    paddingHorizontal: 20
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

  title: {
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.9,
    fontWeight: "bold"
  },
  inputContainer: {
    margin: 20,
    padding: 20,
    paddingBottom: 10,
    marginBottom: 0,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#5F9EA0",
    backgroundColor: "rgba(250, 250, 250, 0.2)"
  },
  input: {
    height: 40,
    padding: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "rgba(250, 250, 250, 1)"
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
export default observer(Login);
