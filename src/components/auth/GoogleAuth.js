import React, { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

// https://developers.google.com/identity/sign-in/web/reference
const keys = {
  clientId: '' //insert you google client id here
}

const GoogleAuth = () => {
  const [user, setUser] = useState(null)

  const onSuccess = (response) => {
    console.log('success', response)
    setUser(response.profileObj)
  }

  const onFailure = (response) => {
    setUser(null)
    console.log('fail', response)
  }
  
  const onLogout = (response) => {
    setUser(null)
    console.log('logout', response)
  }

  return <div>
    {
      user &&
      <div>
        {user.givenName}
        <img src={user.imageUrl} alt={user.givenName} />
      </div>
    }
    <GoogleLogin
      clientId={keys.clientId}
      buttonText='Login with Google'
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      uxMode={'popup'}
    />
    <GoogleLogout
      clientId={keys.clientId}
      buttonText="Logout"
      onLogoutSuccess={onLogout}
    >
    </GoogleLogout>
  </div>
}

export default GoogleAuth