import React from 'react'
import {TouchableOpacity,Text,View,Image} from 'react-native'
import Styles from './Styles'
const DreamioImageView = props =>{ 
    

    return (
        <View style={Styles.imgContainer}>
        <Image 
          source={require('../../../assets/images/background.png')}/>
        <Image style={{ position: 'absolute', top: '50%' }}
          source={require('../../../assets/images/dreamio.png')}/>
      </View>
    )
}
export default DreamioImageView