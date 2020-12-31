
import React, { Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Image, Button,
  KeyboardAvoidingView, SafeAreaView, ScrollView, Alert
} from 'react-native';
import Styles from "./Styles";
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import TextField from '../Components/Common/TextField/textField'
import ButtonSignIn from '../Components/Common/ButtonSignIn/ButtonSignIn'
import DreamioImgView from '../Components/Common/DreamioImageView/DreamioImageView'
import SocailImageView from '../Components/Common/SocialImageView/socailImageView'

import Colors from '../Components/Common/Constants/colors'
import Constants from '../Components/Common/Constants/Validations'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AccountModel from '../models/AccountModel'
import AccountApi from '../Components/Common/Api/AccountApi'
export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailText: '',
      passwordText: '',
      emailValid: true,
      passwordValid: true

    };

  }

  parentCallBackEmail = (data) => {
    this.setState({ emailText: data })
  }

  parentCallBackPassword = (data) => {
    this.setState({ passwordText: data })
  }



  isFormFilled() {
    let checkPassword = Constants.checkPassword(this.state.passwordText)
    let checkEmail = Constants.checkEmail(this.state.emailText)
    if (checkEmail && checkPassword) {
      return true
    }
    if (!emailText) {
      Alert.alert('invalid email')
    } else if (!checkPassword) {
      Alert.alert('invalid password')
    }
    return false
  }

  handleSubmit = async () => {
    if (this.isFormFilled()) {
      let response = await AccountApi.signInApi(this.state)
      if(response.status){

      }else{
        
      }

    }
  }
  render() {
    return (
      <SafeAreaView style={Styles.container}>

        <KeyboardAvoidingScrollView >
          <DreamioImgView />
          <View style={Styles.labelView}>
            <Text style={Styles.signInLabel}> Sign in to your account </Text>
          </View>
          <View style={Styles.inputContainerSignIn}>
            <TextField placeholder={'E-mail'} type={'email'} parentCallBack={this.parentCallBackEmail} />
            <TextField placeholder={'Password'} type={'password'} parentCallBack={this.parentCallBackPassword} />
          </View>
          <View style={Styles.btnsigninViewView}>
            <ButtonSignIn btnLabel={'Sign In'} data={this.handleSubmit} />
          </View>
          <View style={Styles.socailImageSigninView}>
            <SocailImageView />
          </View>
          <TouchableWithoutFeedback style={Styles.noAccontView} onPress={() => this.props.navigation.navigate('SignUp')}>

            <Text style={Styles.noAccountLabel}>Dont have an account yet?</Text>
            <Text style={Styles.labelSignup}>Sign Up</Text>

          </TouchableWithoutFeedback>

        </KeyboardAvoidingScrollView>

      </SafeAreaView>
    );
  }
}
