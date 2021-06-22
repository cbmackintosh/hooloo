import React, { useEffect, useState } from 'react'
import { getAllUserRatings } from '../../API-Calls'

const Account = ({ user, setUser, movies }) => {

  const [ratings, setRatings] = useState([])

  useEffect(() => {
    getAllUserRatings(user.id)
    .then(data => setRatings(data.ratings))
  }, [])

  const logout = () => {
    this.props.setUser(null)
    localStorage.removeItem('hooloo-login')
  }

  return (
    <div>
      <p>username: {user.name}</p>
      <p>email: {user.email}</p>
      <button onClick={() => logout()}>LOGOUT</button>
    </div>
  )

}

export default Account