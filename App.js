
import React, { Component } from 'react';
import { View, Text ,SafeAreaView} from 'react-native';
// import SignInScreen from './screens/SignInScreen'
// import SignUpScreen from './screens/SignUpScreen'
import AccountStack from './Navigation/AccountNavigation'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     
        <AccountStack />
    
    );
  }
}
