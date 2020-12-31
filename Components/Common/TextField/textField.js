import React, { useState } from 'react'
import { TextInput, View, Text } from 'react-native'
import SignInScreen from '../../../screens/SignInScreen'
import SignUp from '../../../screens/SignInScreen'
import Colors from '../Constants/colors'
import Styles from './Styles'
const TextField = props => {
    const [emailText, setEmail] = useState()
    const [passwordText, setPassword] = useState()
    const [labelError, seterrorLabel] = useState()
    const errorFunction = (error) => {
        seterrorLabel(error)
        console.log(labelError)
    }
  
    const handleText = (text) => {
                props.parentCallBack(text)
       
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