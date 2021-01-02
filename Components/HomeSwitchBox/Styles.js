import { Dimensions } from "react-native";
import Colors from '../../Common/Colors'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}
export default {  
    Container:{
        height:hp('15%'),
        borderWidth:0.3,
        borderRadius:6,
        margin:'5%',
        borderColor:Colors.secondryColor,
        
        padding: '5%',
        
    },
    flexRow:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
     
},
switchLabel:{
    
        color:Colors.secondryColor,
        fontFamily:'Grotex-Micro',
        fontSize:19 , 
},switchDescription:{
       color:Colors.secondryColor,
        fontFamily:'Grotex-Micro',
        fontSize:12 , 
        width:'70%',
        opacity: 0.2,
        paddingTop:'5%'
}
}