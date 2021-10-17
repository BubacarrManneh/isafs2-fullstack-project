import React from 'react';
import GoogleLogin from 'react-google-login';
import './App.css';
import axios from 'axios'

function App() {
  const responseGoogle = async (response: any) => {
    console.log(response.tokenId);
    const tokenId = response.tokenId;
    await axios.post('https://localhost:5000/api/v1/google/login', {id_token: tokenId})
  }
  return(
    <div className="App">
      <GoogleLogin
        clientId="644778579634-umlm37ou4nk3e4g0c8o4ftkreapfjb0f.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default App;
