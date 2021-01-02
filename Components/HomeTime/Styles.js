
import { Dimensions } from "react-native";
import Colors from '../../Common/Colors'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}
export default {  
    Container:{
        height:hp('8%'),    
        padding: '5%',
        paddingLeft:'20%',
        paddingRight:'20%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    flexColumn:{
 
    display:'flex',
    flexDirection:'column',
     
},
lineImage:{
    height:'1%',  
    backgroundColor:'grey',    
    marginLeft:'20%',
    marginRight:'20%',
    
}

}