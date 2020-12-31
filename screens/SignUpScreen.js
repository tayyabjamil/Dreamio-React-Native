
import React, { Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Image,Button,
  KeyboardAvoidingView, SafeAreaView, ScrollView,Alert
} from 'react-native';
import Styles from "./Styles";
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import TextField from '../Components/Common/TextField/textField'
import ButtonSignUp from '../Components/Common/ButtonSignUp/ButtonSignUp'
import DreamioImgView from '../Components/Common/DreamioImageView/DreamioImageView'
import SocailImageView from '../Components/Common/SocialImageView/socailImageView'

import Colors from '../Components/Common/Constants/colors'
import Constants from '../Components/Common/Constants/Validations'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AccountModel from '../models/AccountModel'
import AccountApi from '../Components/Common/Api/AccountApi'
export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameText:'',
      emailText:'',
      passwordText:'',
      userNameValid:true,
      emailValid:true,
      passwordValid:true,
      provider:'default',
      user_type:'user'
 
    };
    
  }
  

  parentCallBackEmail = (data) => {
    this.setState({ emailText: data })
 }
 parentCallBackUsername = data =>{
     this.setState({userNameText:data})
 }
 parentCallBackEmailValid = (data) => {
  this.setState({ emailValid: data })
}
 parentCallBackPassword = (data) => {
    this.setState({ passwordText: data })
}

 validateEmail = () => {
  let checkEmail
   checkEmail = Constants.checkEmail(this.state.emailText)
  if(checkEmail===false){
    this.setState({emailValid:false})
    
  }else{
    this.setState({emailValid:true})
  }
  }
  ValidateUserName = () => {
    let checkUsername
     checkUsername = Constants.checkUsername(this.state.userNameText)
    if(checkUsername===false){
      this.setState({userNameValid:false})
      
    }else{
      this.setState({userNameValid:true})
    }
    }
 validatePassword = () => {
 let  checkPassword = Constants.checkPassword(this.state.passwordText)   
   if(checkPassword===false){
    this.setState({passwordValid:false})
  
  }else{
    this.setState({passwordValid:true})
   }
  
 }
 validationCheck =()=>{
     this.ValidateUserName()
     this.validateEmail()
     this.validatePassword()

 }
  handleSubmit=async()=>{
await this.validationCheck()
await AccountApi.SignUpApi(this.state)
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
         <TextField placeholder={'Username'}   parentCallBack = {this.parentCallBackUsername}/> 
         {this.state.userNameValid == false &&
               <Text style={Styles.errorLabel}>Invalid Username</Text>
         }
             <TextField placeholder={'E-mail'}   parentCallBack = {this.parentCallBackEmail}/> 
              {this.state.emailValid == false && 
               <Text style={Styles.errorLabel}>Invalid Email</Text>
              }
             <TextField placeholder={'Password'}   parentCallBack = {this.parentCallBackPassword}/> 
              {this.state.passwordValid == false &&
             <Text style={Styles.errorLabel}>Invalid Passoword</Text>
              }
             </View>
          <View style={Styles.btnSignupView}>
            <ButtonSignUp btnLabel={'Sign Up & Subscribe'} data={this.handleSubmit} />
            </View>
          <View style={Styles.socailImageSignupView}>
            <SocailImageView />
            </View>
           <TouchableWithoutFeedback style={Styles.noAccontView} onPress={()=>this.props.navigation.navigate('SignIn')}>
           
              <Text style={Styles.noAccountLabel}>Already have an account ?</Text>
              <Text style={Styles.labelSignup}>Sign In</Text>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingScrollView>
      
      </SafeAreaView>
    );
  }
}
