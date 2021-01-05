import React from 'react';
import {View,Switch,Text,Image,TouchableOpacity} from 'react-native'
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import DetailScreen from '../../screens/DetailScreen';
import Styles from './Styles'

const HomeSwitchBox = props => {

const DetailScreen =(label)=>{
console.log(label)    
}
    return (
        // <TouchableOpacity style={Styles.Container} onPress={DetailScreen(props.switchLabel)}>
        <TouchableOpacity style={Styles.Container} onPress={props.onPress}>
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
        </TouchableOpacity>
    );
};

export default HomeSwitchBox;