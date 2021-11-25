import React from 'react'
import '../App'
import axios from 'axios'
import GoogleLogin from 'react-google-login'
// import GoogleLogout from 'react-google-login';
import {Customer, Response, Loginprops} from './types'

function Login({setCustomer}: Loginprops){
    const responseGoogle = async (response: any) => {
        console.log("GoogleResponse", response.tokenId);
        const tokenId = response.tokenId;
        const result = await axios.post<Response>('/google/login', {client_id: tokenId})
        
        const token = result.data.token
        localStorage.setItem('Token', token)

        const customerData = result.data.customer as Customer
        setCustomer(customerData)

      }
    
      return(
        <div className="App">
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />

        </div>
      )
}

export default Login
