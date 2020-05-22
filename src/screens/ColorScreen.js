import React, {useState} from 'react';
import {View, StyleSheet, Button, FlatList } from 'react-native';


const ColorScreen = () => {
const[colors, setcolors] = useState([]);

    return (
        <View>
<Button title="Add Color" onPress={()=> {
  setcolors([...colors, randomRgb()])
  console.log(colors)

}}/> 
   <FlatList
   keyExtractor={(item) => item}
   data={colors}
   renderItem={({item})=>{
     return <View style={{height:100, width:550, backgroundColor: item}}/>     


   }}
   />
   
   </View>
    )
}

const randomRgb = () => {
  const red = Math.floor(Math.random()* 256);
  const green = Math.floor(Math.random()* 256);
  const blue = Math.floor(Math.random()* 256);

  return `rgb(${red},${green},${blue})`;



}

const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });

export default ColorScreen 

