import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  // return <WelcomeScreen />;
  return <ViewImageScreen />;
}
