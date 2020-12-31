
import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'



const screens =  {
    SignIn :{
        screen:SignInScreen,
        navigationOptions:{
            headerShown: false,  
          
        } 
        
    },
    SignUp:{
        screen:SignUpScreen,
        navigationOptions:{
            headerShown: false,
          
        }
    }
    }
    const AccountStack = createStackNavigator(screens)
export default createAppContainer(AccountStack)