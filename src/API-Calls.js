const baseURL = `https://rancid-tomatillos.herokuapp.com/api/v2`

export const loginUser = (loginAttempt) => {
  return fetch(`${baseURL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginAttempt)
  })
    .then(response => response.json())
}

export const getAllMovies = () => {
  return fetch(`${baseURL}/movies`)
  .then(response => response.json())
}

export const getAllUserRatings = (id) => {
  return fetch(`${baseURL}/users/${id}/ratings`)
  .then(response => response.json())
}