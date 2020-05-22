import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    // console.log(props.navigation);
    
     
      return <View>
<ImageDetail title="Forrest" imageSource={require('../../assets/forest.jpg')} rating={10} />
<ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')}rating={8}/>
<ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} rating={5.5}/>




      </View>
    };
    
    const styles = StyleSheet.create({
      text: {
        fontSize: 30
      }
    });
    
    export default ImageScreen;
    