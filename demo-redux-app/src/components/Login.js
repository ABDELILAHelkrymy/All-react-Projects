import React from 'react'

function Login({setUser}) {

    const loginToApp = () => {
        // Do some login stuff
        setUser('abdelilah')
    }

  return (
    <div>
        <h1>I am thr login component</h1>
        <button onClick={loginToApp}>LOGIN</button>
    </div>
  )
}

export default Login