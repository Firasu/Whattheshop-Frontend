import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";

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
          <Text style={styles.contentText}> Find Your Expert Today.</Text>
        </View>
        <ImageSlider
          loop
          autoPlayWithInterval={3000}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  slider: { backgroundColor: "#000", height: 350 },
  content1: {
    width: "100%",
    height: 50,
    marginBottom: 10,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center"
  },
  content2: {
    width: "100%",
    height: 100,
    marginTop: 10,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center"
  },
  contentText: { color: "#fff" },
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
    color: "red"
  },
  customSlide: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  customImage: {
    width: 400,
    height: 400
  }
});

export default LandingPage;
