import React from 'react'
import {TouchableOpacity,Text,View,Image} from 'react-native'
import Styles from './Styles'
const SocailImageView = props =>{ 
    

    return (
        <View style={Styles.iconContainer}>
        <Image
          source={require('../../../assets/icons/Apple.png')}
        />
        <Image
          source={require('../../../assets/icons/Facebook.png')}
        />
        <Image
          source={require('../../../assets/icons/Google.png')}
        />
      </View>
    )
}
export default SocailImageView