import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase
import { Content } from "native-base";

// Component
import Login from "./Login";
import Profile from "./Profile";

import LandingPage from "./LandingPage";
import expertList from "./expertList";
import expertDetails from "./expertDetails";
// import itemList from "./itemList";

// Router
import { Route, Switch, Redirect, withRouter } from "react-router-native";

// Common
import PrivateRoute from "../common/PrivateRoute";

class MainContent extends Component {
  render() {
    return (
      <Content>
        <Switch>
          <Route path="/expertList" component={expertList} />
          <Route path="/expertDetails/:id" component={expertDetails} />
          <Route exact path="/" component={LandingPage} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Redirect to="/login" component={Login} />
        </Switch>
      </Content>
    );
  }
}

export default MainContent;
