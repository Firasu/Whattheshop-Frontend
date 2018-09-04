import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase
import { Content } from "native-base";

// Component
import Login from "./Login";
import Profile from "./Profile";
import PrivateLul from "./PrivateLul";
import LandingPage from "./LandingPage";

// Router
import { Route, Switch, Redirect } from "react-router-native";

// Common
import PrivateRoute from "../common/PrivateRoute";

class MainContent extends Component {
  render() {
    return (
      <Content>
        <Switch>
          <Route path="/LandingPage" component={LandingPage} />
          <PrivateRoute path="/privateLul" component={PrivateLul} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Redirect to="/lol" />
        </Switch>
      </Content>
    );
  }
}

export default observer(MainContent);
