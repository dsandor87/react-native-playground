import React from 'react'; 
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name ='Sandor'

    return <View><Text style={styles.textStyle}>Getting  started with React Native</Text>
 <Text style={styles.subtextStyle}>My name is {name}</Text>
 </View>
}; 

const styles = StyleSheet.create({
    textStyle: {
      fontSize: 45 
    }, subtextStyle: {
        fontSize: 30 
      }
});

export default ComponentsScreen;


