import { StatusBar } from "expo-status-bar";
import {
  View,
} from "react-native";




export default function App() {
  
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: 'row',
      // flexDirection: 'column',
      // flexDirection: 'column-reverse',
      // flexDirection: 'row-reverse',
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100
      }}/>
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100
      }}/>
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100
      }}/>

    </View>
  );
}


