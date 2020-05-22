import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ( {navigation}) => {
// console.log(props.navigation);


  return <View><Text style={styles.text}>Home page</Text>
  <Button onPress={()=> navigation.navigate('Components')} title="Components"
   />
   <Button 
   title="List"
   onPress={()=> navigation.navigate('List')} />
     <Button onPress={()=> navigation.navigate('Image')} title="Image"/>
     <Button onPress={()=> navigation.navigate('Counter')} title="Counter"/>
     <Button onPress={()=> navigation.navigate('Color')} title="Color Screen"/>
     <Button onPress={()=> navigation.navigate('Square')} title="Color Changer"/>



   
   {/* <TouchableOpacity onPress={()=> props.navigation.navigate('List')} >
     <Text>Friends</Text> 

   </TouchableOpacity> */}

  </View>;

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
