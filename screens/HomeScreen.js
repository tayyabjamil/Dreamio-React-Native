import React, { Component } from 'react';
import { View, Switch, Text, FlatList } from 'react-native'
import HomeSwitchBox from '../Components/HomeSwitchBox/HomeSwitchBox'
import Styles from "./Styles";
import HomeHeader from '../Components/HomeHeader/HomeHeader'
import HomeFooter from '../Components/HomeFooter/HomeFooter'
import HomeTime from '../Components/HomeTime/HomeTime'
import HomeApi from '../Api/HomeApi'
import AsyncStorage from '@react-native-community/async-storage'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

  }
  componentDidMount() {
    this.getHomeData()

  }

  getHomeData = async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      await HomeApi.getAllMeditations(token).then((response) => {
        this.setState({ data: response })
        console.log(this.state.data)
      });
    }
  }
  render() {

    return (
      <View style={Styles.containerHome}>
        <HomeHeader />
        <View style={Styles.containerSwitch}>
          <FlatList
            data={this.state.data}

            renderItem={(item) => (
              <View >
                 <HomeSwitchBox
                  switchLabel={item.item.name}
                  switchDescripton={item.item.description}
                  imageUri={item.item.image}>
                 </HomeSwitchBox>
               </View>
            )}>
          </FlatList>
        </View>
        <HomeTime />
        <HomeFooter />
      </View>
    );
  }
}
