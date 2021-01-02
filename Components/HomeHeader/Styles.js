
import { Dimensions } from "react-native";
import Colors from '../../Common/Colors'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}
export default {  
    Container:{
        height:hp('5%'),    
        padding: '2%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
            
    },
    flexRow:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
     
},

}