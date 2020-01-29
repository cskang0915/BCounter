module.exports = ({username, email, password, password2}) => {
  let error = []

  if (!username) {
    error.push({message: "no username"})
  }

  if (!email) {
    error.push({message: "no email"})
  }

  if (!password) {
    error.push({message: "no password"})
  }

  if(password !== password2) {
    error.push({message: "passwords do not match"})
  }

  return {
    error,
    notValid: Boolean(error.length)
  }
}