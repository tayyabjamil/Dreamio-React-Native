import React, { useState } from 'react'
import { TextInput, View, Text } from 'react-native'
import SignInScreen from '../../../screens/SignInScreen'
import SignUp from '../../../screens/SignInScreen'
import Colors from '../../../Common/Colors'
import Styles from './Styles'
const TextField = props => {
  
    const handleText = (text) => {
                props.parentCallBack(text,props.type)
       
    }
    return (
        <View >
            <View style={Styles.inputView}>
                <TextInput style={Styles.input}
                    placeholder={props.placeholder}
                    placeholderTextColor={Colors.secondryColor}
                    onChangeText={handleText}
                ></TextInput>

              
            </View>
           

        </View>
    )
}
export default TextField