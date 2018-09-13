import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Header,
  Button,
  Image,
  TouchableHighlight
} from "react-native";
import { Link, withRouter } from "react-router-native";
import { observer } from "mobx-react";
import ImageSlider from "react-native-image-slider";

class LandingPage extends Component {
  render() {
    const images = [
      "https://media.istockphoto.com/photos/concentrated-surgeon-performing-surgery-with-her-team-picture-id856024086",
      "https://media.istockphoto.com/photos/female-architect-picture-id473849812",
      "https://media.istockphoto.com/photos/his-presentations-are-always-informative-picture-id887882750"
    ];
    return (
      <View style={styles.container}>
        <View style={styles.content1}>
          <Link
            style={styles.link}
            to="/expertList"
            component={Button}
            title="Find Your Expert"
          />
        </View>
        <ImageSlider
          loop
          autoPlayWithInterval={1000}
          images={images}
          onPress={({ index }) => alert(index)}
          customSlide={({ index, item, style, width }) => (
            <View key={index} style={[style, styles.customSlide]}>
              <Image source={{ uri: item }} style={styles.customImage} />
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {images.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.button}
                  >
                    <Text style={position === index && styles.buttonSelected}>
                      {index + 1}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </View>
          )}
        />
        );
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slider: { backgroundColor: "#000", height: 350 },
  content1: {
    width: "100%",
    height: 100,
    marginBottom: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },

  contentText: { color: "#fff", fontWeight: "bold" },
  buttons: {
    zIndex: 1,
    height: 15,
    marginTop: -25,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  button: {
    margin: 3,
    width: 15,
    height: 15,
    opacity: 0.9,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonSelected: {
    opacity: 1,
    color: "#5F9EA0"
  },
  customSlide: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  customImage: {
    width: 400,
    height: 400
  },
  link: {
    color: "white",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15
  }
});

export default observer(LandingPage);
