import axios from 'axios'
import AccountModel from '../../../models/AccountModel'
const signInApi = (data)=>{
   
       
          
    if(data.emailValid === false || 
    data.passwordValid===false)
     {
        alert("Invalid Form")
   
    }else{
        axios.post('http://mashghol.com/dreamio/api/login_user', {
                     "email": data.emailText, 
                    "password": data.passwordText,
                    "provider": data.provider,
                    "user_type": data.user_type,
                   })
          .then(function (response) {
            
            if(response.data.code ===200){
             let dataModel = new AccountModel(response.data.data)
             
             console.log(dataModel)
                alert('Login Successfull')
                
            }
          
          })
          .catch(function (error) {
        alert("user not found")   
        });
   
}
  
}
   const SignUpApi = (data)=>{
        if(data.userNameValid === false || data.emailValid === false || 
        data.passwordValid===false)
         {
       
        }else{
        
            axios.post('http://mashghol.com/dreamio/api/create_user', {
            "name": data.userNameText,
            "email": data.emailText, 
            "password": data.passwordText,
            "provider": data.provider,
            "user_type": data.user_type,
          
    }).then(function(response) {
             if(response.data.code === 200){
          alert('Account Created')
          let dataModel = new AccountModel(response.data.data)
          console.log(dataModel)
          return dataModel
         
        }
      
    
    }).catch((error)=>{
        alert("user Already exit")   
     
    })
}
      
  }

export default{signInApi,SignUpApi}
