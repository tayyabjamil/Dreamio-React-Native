
import { Dimensions } from "react-native";
import Colors from '../../Common/Colors'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}
export default {  
    Container:{
        padding: '5%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
       height:hp('20%'),
    },
    flexRow:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
     
},
imgMargin:{
    marginTop:70
}

}