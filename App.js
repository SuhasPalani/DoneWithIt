import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TouchableNativeFeedback,
  SafeAreaView,
  Platform,
  Button,
} from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"));
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '50%',
        height: 70,
      }}>

      </View>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
