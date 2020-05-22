import React,{useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter'

const COLOR_INC =15

const SquareScreen= ()=>{
    const [red,setRed ] = useState(0);
    const [green,setGreen ] = useState(0);
    const [blue,setBlue ] = useState(0)

    console.log(`red: ${red}`)
   console.log(`blue:${blue}`)
     console.log(`green: ${green} `)

    const setColor= (color, change)=> {

        switch (color){
            case'red':
            red + change >255 || red + change< 0 ? null : setRed(red + change);
                return;


            case'green':
                green + change >255 || green + change< 0 ? null : setGreen(green + change)
                    return;
            
            case'blue':
            blue + change >255 || blue + change< 0 ? null : setBlue(blue + change)
                return;
            
            
            

        }


    }
    return(    
        <View>
<View style={{height:250, width:550, backgroundColor:`rgb(${red},${green},${blue})`}}/>

            <ColorCounter onIncrease={()=>setColor('red',COLOR_INC)}
            onDecrease={()=>setColor('red',-1*COLOR_INC)} color='RED'/>
            <ColorCounter onIncrease={()=>setColor('blue',COLOR_INC)}
            onDecrease={()=>setColor('blue',-1 * COLOR_INC)} color='BLUE'/>
            <ColorCounter onIncrease={()=>setColor('green',COLOR_INC)}
            onDecrease={()=>setColor('green',-1 * COLOR_INC)} color='GREEN'/>


        </View>



    )

};

const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });


export default SquareScreen