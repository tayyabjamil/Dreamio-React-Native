import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Styles from './Styles';
import DetailApi from '../Api/DetailApi'
import AsyncStorage from '@react-native-community/async-storage'

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
getDetails=async()=>{
  const token = await AsyncStorage.getItem('token')
  let detailId = this.props.navigation.getParam('detailId');

  if (token && detailId) {
    DetailApi.getDetails(token,detailId).then((response) => {
      // this.setState({ data: response }) 
      console.log(this.state.data);
    });
  }

}
  componentDidMount() {
  this.getDetails()
  }
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.labelSignup}> DetailScreen </Text>
      </View>
    );
  }
}
