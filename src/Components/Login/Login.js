import React, { useState } from 'react'
import { loginUser } from '../../API-Calls'

const Login = ({ setUser }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const loginAttempt = {
      email: email,
      password: password
    }
    loginUser(loginAttempt)
    .then(data => {
      if (!data.error) {
        setUser(data)
        localStorage.setItem('hooloo-login', JSON.stringify(data))
      } else {
        setError(data.error)
      }
    })
  }
  
  return (
    <form onSubmit={handleSubmit}>

      <label for="email">Email:</label>
      <input 
        type="text" 
        id="email" 
        name="email" 
        onChange={e => setEmail(e.target.value)}
      />

      <label for="password">Password:</label>
      <input 
        type="password" 
        id="password" 
        name="password" 
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit">LOGIN</button>

      {error && <p>{error}</p>}

    </form>
  )
}

export default Login