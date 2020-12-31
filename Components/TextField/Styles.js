import { Dimensions } from "react-native";
import Colors from '../../Common/Colors'
const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*2
}
export default {
 inputView:{ 
   
     paddingLeft:'5%', 
     paddingRight:'5%', 
    
},
input:{
    borderBottomWidth:2,
    borderBottomColor:Colors.secondryColor,
    opacity: 0.4,
    color: Colors.secondryColor,
    fontFamily:'Grotex-Micro'

},
errorLabel:{
color:'red'
},
errorView:{
    marginLeft:20
}
}
