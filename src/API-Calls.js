const baseURL = `https://rancid-tomatillos.herokuapp.com/api/v2`

export const loginUser = (loginAttempt) => {
  console.log(typeof email)
  return fetch(`${baseURL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginAttempt)
  })
    .then(response => response.json())
}