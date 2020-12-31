import { Dimensions } from "react-native";
import Colors from '../Components/Common/Constants/colors'
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