import { Dimensions } from "react-native";
import Colors from '../../Common/Constants/colors'
const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*2
}
export default {  
    btnView:{
height:'15%',


    },
    btnContainer:{
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:'10%',
        marginBottom:'10%',
        paddingTop:'3%',
        paddingBottom:'3%',
        backgroundColor:'#0F0F0F',
        borderRadius:6,
        borderWidth: 1,
        borderColor: 'grey'
      },
      btnText:{
          color:Colors.secondryColor,
          textAlign:'center',
          paddingLeft : '5%',
          paddingRight : '5%',

      }
    }