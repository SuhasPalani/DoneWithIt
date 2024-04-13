import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
    justifyContent: "center",
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
});

export default WelcomeScreen;
