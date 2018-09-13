import { decorate, observable, action, computed } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";

// Utils
import setAuthToken from "../utils/setAuthToken";

const instance = axios.create({
  baseURL: "http://192.168.100.113:8000/"
});

class Store {
  constructor() {
    this.user = null;
  }

  get isAuthenticated() {
    return !!this.user;
  }

  setCurrentUser(user) {
    this.user = user;
  }

  logoutUser() {
    AsyncStorage.removeItem("jwtToken").then(
      () => {
        this.user = null;
        setAuthToken();
      },
      () => {
        console.log("Oops.Something went wrong with logging out.");
      }
    );
  }

  registerUser(username, password) {
    const userData = {
      username: username,
      password: password
    };
    instance
      .post("/api/register/", userData)
      .then(response => response.response)
      .then(user => {
        const { token } = user;
        // Save token to localStorage
        AsyncStorage.setItem("jwtToken", token)
          .then(() => {
            // Set token to Auth header
            setAuthToken(token);

            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            this.setCurrentUser(decoded);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  loginUser(username, password) {
    const userData = {
      username: username,
      password: password
    };
    instance
      .post("/api/login/", userData)
      .then(res => res.data)
      .then(user => {
        const { token } = user;
        // Save token to localStorage
        AsyncStorage.setItem("jwtToken", token).then(
          () => {
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            console.log(decoded);
            this.setCurrentUser(decoded);
          },
          () => console.log("Something went wrong with setting the jwt token.")
        );
      })
      .catch(err =>
        console.log("Something went wrong while logging in. Please try again")
      );
  }

  getUserProfile() {
    axios
      .get("http://192.168.100.244:8000/api/user/profile/")
      .then(response => console.log(response.data))
      .then(profile => (this.userDetails = profile))
      .catch(err => console.error(err));
  }
  checkForToken = () => {
    AsyncStorage.getItem("jwtToken")
      .then(token => {
        if (token !== null) {
          const currentTime = Date.now() / 1000;

          // Decode token and get user info
          const decoded = jwt_decode(token);

          // Check token expiration
          if (decoded.exp >= currentTime) {
            // Set auth token header
            setAuthToken(token);
            // Set user and isAuthenticated
            console.log(decoded);
            this.setCurrentUser(decoded);
          } else {
            this.logoutUser();
            // Redirect to login
          }
        }
      })
      .catch(err => console.error(err));
  };
}

decorate(Store, {
  user: observable,
  isAuthenticated: computed,
  getUserProfile: action
});

export default new Store();
