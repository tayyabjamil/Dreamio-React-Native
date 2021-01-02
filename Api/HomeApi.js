import axios from 'axios'

import Constant from '../Common/Constant'
import AsyncStorage from '@react-native-community/async-storage'
import HomeModel from '../models/HomeModel'
const getAllMeditations = (token) => {

   return axios.get(Constant.domain+Constant.HomeEndPoint ,
     { headers: {"Authorization" : `Bearer ${token}`} })
    .then(res => {
    return res.data.data
    })
    .catch((error) => {
      console.log(error)
    });
}

export default { getAllMeditations }
