
import React, { Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Image, Button,
  KeyboardAvoidingView, SafeAreaView, ScrollView, Alert
} from 'react-native';
import TextField from '../Components/TextField/textField'
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import ButtonSignIn from '../Components/ButtonSignIn/ButtonSignIn'
import DreamioImgView from '../Components/DreamioImageView/DreamioImageView'
import SocailImageView from '../Components/SocialImageView/socailImageView'
import Styles from "./Styles";

import Validations from '../Common/Validations'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import AccountApi from '../Api/AccountApi'
import Constant from '../Common/Constant'
import AsyncStorage from '@react-native-community/async-storage'
export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailText: Constant.defaultInput,
      passwordText: Constant.defaultInput,
      emailValid: true,
      passwordValid: true,
      storagekey:'@save_token'
    };

  }

  parentCallBackFunction = (text, type) => {
    if (type === Constant.typeEmail) {
      this.setState({ emailText: text })
    } else if (type === Constant.typePassword) {
      this.setState({ passwordText: text })
    }
  }

  isFormFilled() {
    let checkPassword = Validations.checkPassword(this.state.passwordText)
    let checkEmail = Validations.checkEmail(this.state.emailText)
    if (checkEmail && checkPassword) {
      return true
    }
    if (!checkEmail) {
      Alert.alert('invalid email')
    } else if (!checkPassword) {
      Alert.alert('invalid password')
    }
    return false
  }

  handleSubmit = async () => {
    const token=''
    if (this.isFormFilled()) {
     AccountApi.signInApi(this.state).then((response) => {
        if (response.code == 200) {
          
           AsyncStorage.setItem('token',response.jwt_token)
          this.props.navigation.navigate('Home')
          alert(response.message)
        } else {
          alert("Failed Login")
        }

      });

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
         
           <TextField placeholder={Constant.typeEmail} type={Constant.typeEmail} parentCallBack={this.parentCallBackFunction} />
            <TextField placeholder={Constant.typePassword} type={Constant.typePassword} parentCallBack={this.parentCallBackFunction} />
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
