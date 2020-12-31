import { Dimensions } from "react-native";
import Colors from '../Constants/colors'
const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*2
}
export default {
container: {
    backgroundColor: Colors.primaryColor,
    
    height:'100%',
    display:'flex',
   
    flexDirection:'column',
    justifyContent:'center'

}
}