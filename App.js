import { StatusBar } from "expo-status-bar";
import {
  View,
} from "react-native";




export default function App() {
  
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: 'row', //horizontal
      justifyContent: 'center', //main axis
      // alignItems: "baseline",
      alignItems: "center", //secondary
      // alignItems: "flex-end",
      // alignItems: "flex-start",
      // alignItems: "stretch",
      // justifyContent: 'flex-end', //main axis
      // justifyContent: 'flex-start', //main axis
      // justifyContent: 'space-around', //main axis
      // justifyContent: 'space-between', //main axis
      // justifyContent: 'space-evenly', //main axis
      // flexDirection: 'column',
      // flexDirection: 'column-reverse',
      // flexDirection: 'row-reverse',
      flexWrap: 'wrap',
      alignContent: 'center'
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100, 
        // flexShrink: 1,
        // flexBasis: 100,//map width or height
        // flexGrow: 1,
        // alignSelf: 'flex-start'
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


