import React, { useEffect } from 'react'
import {TouchableOpacity,Text,View} from 'react-native'
import Styles from './Styles'

const ButtonSignUp = props =>{ 
    useEffect(()=>{
        console.log(props.navigation)
    })

    return (
        <View style={Styles.btnView}>
        <TouchableOpacity onPress={props.data}
          style={Styles.btnContainer}

          underlayColor='#fff' 
        //    onPress={()=>{  props.navigation.navigate({routeName:props.navigationRoute})}}
           >
          <Text style={Styles.btnText}>{props.btnLabel} </Text>
        </TouchableOpacity>
        
        </View>  
    )
}  
export default ButtonSignUp