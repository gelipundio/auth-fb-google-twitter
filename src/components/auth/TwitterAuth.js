import React, { useState } from 'react'
import TwitterLogin from 'react-twitter-auth'
//https://www.npmjs.com/package/react-twitter-auth

const TwitterAuth = () => {
  const [user, setUser] = useState(null)

  const onFailed = (err) => {
    setUser(null)
    console.log('fail', err)
  }

  const onSuccess = response => {
    console.log('success', response)
    setUser(response)
  }

  return <div>
    <TwitterLogin
      loginUrl="http://localhost:4000/api/v1/auth/twitter"
      onFailure={onFailed}
      onSuccess={onSuccess}
      requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
    />
  </div>
} 

export default TwitterAuth