
import React, { Component } from 'react';
import { View, Text ,SafeAreaView} from 'react-native';

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
