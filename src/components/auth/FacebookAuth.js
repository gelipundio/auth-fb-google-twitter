import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login'

const keys = {
  appId: '' //insert you fb app id here
}

const FacebookAuth = () => {
  const [user, setUser] = useState({})

  const onLogin = response => {
    setUser(response)
  }

  return <div>
    {
      user && user.picture &&
      <img alt={user.name} src={user.picture.data.url} />
    }

    <FacebookLogin
      appId={keys.appId}
      autoLoad={true}
      fields='name,email,picture'
      callback={onLogin}
    />
  </div>
}

export default FacebookAuth
