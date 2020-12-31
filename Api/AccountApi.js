import axios from 'axios'
import AccountModel from '../models/AccountModel'
import ApiResultModel from '../models/ApiResultModel'
import Constant from '../Common/Constant'
const signInApi = (data,response) => {


 return axios.post(Constant.domain + Constant.SigninEndPoint, {
    "email": data.emailText,
    "password": data.passwordText,
    "provider": data.provider,
    "user_type": data.user_type,
  })
    .then(function (response) {

      if (response.data.code === 200) {
        let dataModel = new AccountModel(response.data.data)
        let apiResult = new ApiResultModel(response.data.code, response.data.message)
       return apiResult
      }

    })
    .catch(function (error) {
    return false 
    });

}
const signUpApi = (data, response) => {
 return axios.post(Constant.domain + Constant.SignUpEndPoint, {
    "name": data.userNameText,
    "email": data.emailText,
    "password": data.passwordText,
    "provider": data.provider,
    "user_type": data.user_type,

  }).then(function (response) {
    if (response.data.code === 200) {
      alert('Account Created')
      let dataModel = new AccountModel(response.data.data)

      let apiResult = new ApiResultModel(response.data.code, response.data.message)
      return apiResult
    }
  }).catch((error) => {
    return false

  })
}

export default { signInApi, signUpApi }
