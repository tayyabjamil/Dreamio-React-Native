import { Dimensions } from "react-native";
import Colors from '../Common/Colors'
const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default {

  scrollView:{
    },
    inputView:{
    
      marginTop:'2%',
      paddingLeft:'5%', 
      paddingRight:'5%', 
     justifyContent: 'center',
 },
 input:{
     borderBottomWidth:2,
     borderBottomColor:Colors.secondryColor,
     opacity: 0.4,
     color: Colors.secondryColor,
   
 },
    container: {
        backgroundColor:Colors.primaryColor,
         flex: 1,
      //  height:hp('100%'),
        flexDirection:'column',
        justifyContent:'center'
    
    },
    containerHome: {
       backgroundColor:Colors.primaryColor,
       flex: 1,
       padding: '5%',
     },
  containerSwitch: {
    flexDirection:'column',
    paddingTop:'5%',
    paddingBottom:'5%'
},
  ContainerHomeBottom:{
    height:hp('13%'),
    
    borderWidth:0.3,
    borderRadius:6,
    marginLeft:'10%',
    marginRight:'10%',
    borderColor:Colors.secondryColor,
    borderStyle: 'dashed',
    padding: '5%',
     marginTop:'5%'
    
},
homeLabel:{
  color:Colors.secondryColor,
  paddingLeft:5,
  fontSize:14,
  fontFamily:'Grotex-Micro'
},
    labelView:{
       height:'10%',
       marginTop:'10%', 
      justifyContent: 'center',
        alignItems: 'center', 
      
    },
    signInLabel:{
    color:Colors.secondryColor,
    fontFamily:'Grotex-Micro',
    fontSize:19 ,      
    
},
   
  noAccountLabel:{
    color:Colors.secondryColor,
    fontFamily:'Grotex-Micro',
    fontSize:14,
    color: Colors.secondryColor,
    opacity: 0.4        
  },
  noAccontView:{

      flexDirection:'row',
      justifyContent:'center',
       width:'100%',
      height:hp('20%'),
    marginTop:15
    
  },
  labelSignup:{
    color:Colors.secondryColor,
    paddingLeft:5,
    fontSize:14,
    fontFamily:'Grotex-Micro'

  },
  inputContainerSignIn:{
   
height:hp('20%')
        },
        
  inputContainerSignUp:{
   
    height:hp('30%')
            },
        btnSignupView:{
          height:hp('10%'),
         
        },
        btnsigninViewView:{
          height:hp('15%'),
              },
        errorLabel:{
          color:'red',
          marginLeft:20,
          fontFamily:'Grotex-Micro'
        },
        socailImageSignupView:{
          height:hp('10%'),
          paddingTop:10,
          paddingBottom:10,
          
        },
        socailImageSigninView:{
          height:hp('15%'),
          paddingTop:30,
          paddingBottom:30
    
        }
}