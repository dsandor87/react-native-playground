import React from 'react'; 
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        {
            name: 'Friend no1', 
            age:21
        }, {
            name: 'Friend no2',
            age:58

        }, {
            name: 'Friend no3',
            age:78

        }, {
            name: 'Friend no4',
            age:56
        }, {
            name: 'Friend no5',
            age:36 
        }, {
            name: 'Friend no6',
            age:21
        }, {
            name: 'Friend no7',
            age:35
        }, {
            name: 'Friend no8',
            age:25
        }, {
            name: 'Friend no9',
            age:29
        },
    ]


    return (<FlatList 
        // horizontal
        // showsHorizontalScrollIndicator={false}
        keyExtractor={(friend)=>friend.name}
        data={friends}
        renderItem={({item})=>{
        return <Text style={styles.textStyle}>{item.name } - Age: {item.age} </Text>
        }}/>)
    
   }; 
   
   const styles = StyleSheet.create({
       textStyle: {
           marginVertical: 50
       }

   });
   
   export default ListScreen;
   
   