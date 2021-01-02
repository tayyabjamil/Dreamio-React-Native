import React from 'react';
import {View,Image} from 'react-native'
import Styles from './Styles'
const HomeHeader = () => {
    return (
        <View style={Styles.Container}>
               <Image  style={Styles.imgMargin}
          source={require('../../assets/images/FooterImage1.png')}/>
        <Image  style={{marginBottom:30}}
          source={require('../../assets/images/FooterImage2.png')}/>
        <Image style={Styles.imgMargin}
          source={require('../../assets/images/FooterImage3.png')}/>
     
        </View>
    );
};

export default HomeHeader;