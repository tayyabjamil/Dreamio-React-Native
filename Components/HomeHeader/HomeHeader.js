import React from 'react';
import {View,Image} from 'react-native'
import Styles from './Styles'
const HomeHeader = () => {
    return (
        <View style={Styles.Container}>
               <Image 
          source={require('../../assets/images/Star.png')}/>
        <Image 
          source={require('../../assets/images/DREAMIOLabel.png')}/>
        <Image 
          source={require('../../assets/images/imgStar.png')}/>
     
        </View>
    );
};

export default HomeHeader;