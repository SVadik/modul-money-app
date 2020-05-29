export function checkAuthorization () {
  
  const storedToken = localStorage.getItem('token')
  
  if (storedToken) {

    const token = JSON.parse(storedToken)
    const expiration = Math.round(new Date(token.expiration) / 1000);
    const currentDate = Math.round(new Date() / 1000);

    if (currentDate < expiration) 
      return true
    return false
  }
  return false
}

export function getToken() {
  const tokenObj = JSON.parse(localStorage.getItem('token'))
  if (tokenObj) {
    return tokenObj.token
  }
}