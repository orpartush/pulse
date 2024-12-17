export const validateEmail = (email: string) => {
  const trimmedEmail = email.trim()
  if (!trimmedEmail) return []
  const errors = []
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const isValidEmailFormat = emailRegex.test(trimmedEmail)
  if (!isValidEmailFormat) errors.push('Not a valid email')
  return errors
}

export const validatePassword = (password: string) => {
  if (!password) return []
  const errors = []
  if (password.length <= 6) errors.push('Short password')
  return errors
}
