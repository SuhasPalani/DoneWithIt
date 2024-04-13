import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableNativeFeedback,SafeAreaView } from 'react-native';

export default function App() {
  
  
  return (
    <SafeAreaView style={styles.container}>
      <Text >Hello React Native!</Text>
      <TouchableNativeFeedback onPress={() => console.log("Image Tapped")}>
      <View style={{ width:200,height:70,backgroundColor:"dodgerblue" }}></View>
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
