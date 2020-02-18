module.exports = ({first_name, last_name, username, email}) => {
  let error = []

  if (!first_name) {
    error.push({message: "no first name"})
  }

  if (!last_name) {
    error.push({message: "no last name"})
  }

  if (!username) {
    error.push({message: "no username"})
  }

  if (!email) {
    error.push({message: "no email"})
  }

  return {
    error,
    notValid: Boolean(error.length)
  }
}