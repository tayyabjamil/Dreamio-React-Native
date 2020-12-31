
import React, { Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Image, Button,
  KeyboardAvoidingView, SafeAreaView, ScrollView, Alert
} from 'react-native';
import Styles from "./Styles";
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import TextField from '../Components/TextField/textField'
import ButtonSignUp from '../Components/ButtonSignUp/ButtonSignUp'
import DreamioImgView from '../Components/DreamioImageView/DreamioImageView'
import SocailImageView from '../Components/SocialImageView/socailImageView'

import Colors from '../Common/Colors'
import Validations from '../Common/Validations'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AccountModel from '../models/AccountModel'
import AccountApi from '../Api/AccountApi'
import Constant from '../Common/Constant'
export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameText: Constant.defaultInput,
      emailText: Constant.defaultInput,
      passwordText: Constant.defaultInput,
      userNameValid: true,
      emailValid: true,
      passwordValid: true,
      provider: Constant.defaultProvider,
      user_type: Constant.userType

    };

  }


  parentCallBackFunction = (text, type) => {
    if (type === "username") {
      this.setState({ userNameText: text })
    } else if (type === "email") {
      this.setState({ emailText: text })
    } else if (type === "password") {
      this.setState({ passwordText: text })
    }
  }

  isFormFilled() {
    let checkPassword = Validations.checkPassword(this.state.passwordText)
    let checkEmail = Validations.checkEmail(this.state.emailText)
    let checkuserName = Validations.checkUsername(this.state.userNameText)
    if (checkEmail && checkPassword && checkuserName) {
      return true
    }
    if (!checkuserName) {
      Alert.alert('invalid username')
    } else if (!checkEmail) {
      Alert.alert('invalid email')
    } else if (!checkPassword) {
      Alert.alert('invalid password')
    }
    return false
  }
  handleSubmit = async () => {
    let response = AccountApi.signUpApi(this.state)
    .then((response) => {
      if (response.code == 200) {
        alert(response.message)
      } else {
        alert("Failed Login")
      }

    });

    } 
  

  render() {
    return (
      <SafeAreaView style={Styles.container}>

        <KeyboardAvoidingScrollView >
          <DreamioImgView />
          <View style={Styles.labelView}>
            <Text style={Styles.signInLabel}>Create an Account</Text>
          </View>
          <View style={Styles.inputContainerSignUp}>
            <TextField placeholder={'Username'} type={'username'} parentCallBack={this.parentCallBackFunction} />
            <TextField placeholder={'E-mail'} type="email" parentCallBack={this.parentCallBackFunction} />
            <TextField placeholder={'Password'} type="password" parentCallBack={this.parentCallBackFunction} />
          </View>
          <View style={Styles.btnSignupView}>
            <ButtonSignUp btnLabel={'Sign Up & Subscribe'} data={this.handleSubmit} />
          </View>
          <View style={Styles.socailImageSignupView}>
            <SocailImageView />
          </View>
          <TouchableWithoutFeedback style={Styles.noAccontView} onPress={() => this.props.navigation.navigate('SignIn')}>

            <Text style={Styles.noAccountLabel}>Already have an account ?</Text>
            <Text style={Styles.labelSignup}>Sign In</Text>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingScrollView>

      </SafeAreaView>
    );
  }

}