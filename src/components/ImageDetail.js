import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";

const ImageDetail = ({title, imageSource, rating}) => {
    // console.log(props );
    
    
return <View>
    <Image source={imageSource}/>
    <Text>{title}</Text>
    <Text>Image score - {rating}</Text>

    </View>
    };
    
    const styles = StyleSheet.create({
      text: {
        fontSize: 30
      }
    });
    
    export default ImageDetail;
    