import axios from 'axios'

import Constant from '../Common/Constant'
const getDetails = (token,id) => {

   return axios.post(Constant.domain +  Constant.detailEndPoint, 
    { "meditation_id": id},
    { headers: {"Authorization" : `Bearer ${token}`} },
    
    )
        .then(function (response) {
    
          if (response.data.code === 200) {
     console.log(response)
            // let dataModel = new AccountModel(response.data.data)
            // let apiResult = new ApiResultModel(response.data.code, response.data.message,response.data.data.jwt_token)
           return response
          }
    
        })
        .catch(function (error) {
        return false 
        });
    
}

export default { getDetails }
