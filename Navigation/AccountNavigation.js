
import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'

const screens =  {
    Home :{
        screen:HomeScreen,
        navigationOptions:{
            headerShown: false,  
          
        } 
        
    },
   
    
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
    },
    Detail :{
        screen:DetailScreen,
        navigationOptions:{
            headerShown: false,  
          
        } 
        
    },
       
}
    const AccountStack = createStackNavigator(screens)
export default createAppContainer(AccountStack)