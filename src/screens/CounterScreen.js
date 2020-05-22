import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'
// import { useState } from 'react';

const CounterScreen = ()=> {
const [counter, setCounter]= useState(0);

    return ( <View>
    <Text style={styles.text}>Current Count:{counter}</Text>



        <Button title='Increase' style={styles.text} onPress={()=>{
            setCounter(counter+1) 
        }}/>
        <Button title='Decrease' style={styles.text} onPress={()=> {
                        setCounter(counter-1)
        }}/>


    </View>



    )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 40
    }
  });




export default CounterScreen;