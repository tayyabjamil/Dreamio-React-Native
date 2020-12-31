import { Dimensions } from "react-native";
import Colors from '../Constants/colors'
  const Screen = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height*2
  }
  export default {  
    iconContainer:{
       
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:'10%',
        paddingRight:'10%'
      },
      }