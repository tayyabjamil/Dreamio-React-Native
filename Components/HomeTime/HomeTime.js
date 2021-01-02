import React from 'react';
import {View,Image} from 'react-native'
import Styles from './Styles'
const HomeHeader = () => {
    return (
       <View style={Styles.flexColumn}>
        <View style={Styles.Container}>
               <Image 
          source={require('../../assets/images/Ellipse.png')}/>
        <Image 
          source={require('../../assets/images/08_00.png')}/>
        <Image 
          source={require('../../assets/images/am.png')}/>
     
        </View>
      <View style={Styles.lineImage}> 
        <Image  
          source={require('../../assets/images/Line.png')}/>
     </View>
        </View>
        );
};

export default HomeHeader;