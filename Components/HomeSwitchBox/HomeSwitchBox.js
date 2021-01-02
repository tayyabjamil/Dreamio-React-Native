import React from 'react';
import {View,Switch,Text,Image} from 'react-native'
import Styles from './Styles'
const HomeSwitchBox = props => {
    return (
        <View style={Styles.Container}>
            <View style={Styles.flexRow}>
            <Text style={Styles.switchLabel}>{props.switchLabel}</Text>
           <View >
            <Image  source={{uri: props.imageUri}}
            style={{width: 120, height: 30}} ></Image>
          </View>
            </View>
            <View style={Styles.flexRow}>
            <Text style={Styles.switchDescription}>{props.switchDescripton}</Text>
            <View style={{marginTop:20}}>
            <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
      
      />
      </View>
            </View>
        </View>
    );
};

export default HomeSwitchBox;