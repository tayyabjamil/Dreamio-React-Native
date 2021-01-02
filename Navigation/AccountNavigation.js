
import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import HomeScreen from '../screens/HomeScreen'


const screens =  {
    
    SignIn :{
        screen:SignInScreen,
        navigationOptions:{
            headerShown: false,  
          
        } 
        
    },
    Home :{
        screen:HomeScreen,
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