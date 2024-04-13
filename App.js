import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert, TouchableNativeFeedback,SafeAreaView, Button } from 'react-native';

export default function App() {
  
  
  return (
    <SafeAreaView style={[styles.container,containerStyle]}>
      {/* <Text >Hello React Native!</Text>
      <TouchableNativeFeedback onPress={() => console.log("Image Tapped")}>
      <View style={{ width:200,height:70,backgroundColor:"dodgerblue" }}></View>
      </TouchableNativeFeedback>
      <StatusBar style="auto" /> */}

      <Button 
      title="Click Me" 
      color="blue" 

      onPress={ () => console.log("Pressed")}
      // Alert.alert method
      // onPress={() => Alert.alert("My title", "My message",[
      //   { text: "Yes", onPress: () => console.log("Yes") },
      //   { text: "No", onPress: () => console.log("No")}, 
      // ])}

      // Alert.prompt
      // used only in ios, this works like what ever the user types, gets displayed
      // onPress={() =>
      // Alert.prompt("My title","My message", (text) => console.log(text))
      // }

      />
    </SafeAreaView>
  );
}

const containerStyle= { backgroundColor:"orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
