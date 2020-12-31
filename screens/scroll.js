import React, { Component } from 'react';
import { View, Text, TextInput, Platform,TouchableOpacity, Image, 
    KeyboardAvoidingView, } from 'react-native';
    import {  StyleSheet,SafeAreaView, ScrollView } from 'react-native';
  import Styles from "./Styles";
  import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
  class Scroll extends Component {  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex: 1,backgroundColor:'green',height:800,width:400}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
      //   <ScrollView style = {{ backgroundColor: 'green'}} ref = 'scroll'>
      //   <KeyboardAvoidingView behavior='position' style = {{backgroundColor: 'green', flex:1}}>
      //         <View style = {{height: 300}}/>
      //         <TextInput style = {{height: 60}} placeholder='Example 1' />
      //         <TextInput style = {{height: 60}} placeholder='Example 2' />
      //         <TextInput style = {{height: 60}} placeholder='Example 3' />
      //         <TextInput style = {{height: 60}} placeholder='Example 4' onFocus = {() => this.refs['scroll'].scrollTo({y: 60})}/>
      //   </KeyboardAvoidingView>
      // </ScrollView>
    );
  }
}
export default Scroll;