import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";
import { StyleSheet, View, Image, TextInput } from "react-native";

// Store
import authStore from "../stores/authStore";

// Routing
import { Redirect } from "react-router-native";

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
        <Form style={styles.formContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../images/Experts.png")}
            />
            <Text style={styles.title}>
              Login to browse & book experts today.
            </Text>
          </View>
          <Item>
            <TextInput
              style={styles.input}
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={username => this.setState({ username })}
            />
          </Item>
          <Item last>
            <TextInput
              style={styles.input}
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Button
            style={styles.button}
            full
            onPress={() => alert("You need to implement Login noob...")}
          >
            <Text>Login</Text>
          </Button>
        </Form>
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
  logo: {
    width: 100,
    height: 100
  },
  button: {
    backgroundColor: "#5F9EA0"
  },
  title: {
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.9
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10
  }
});
export default observer(Login);
