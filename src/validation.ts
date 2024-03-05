export const EmailValidator = (value: string): boolean | string => {
  if (value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailRegex.test(value)) {
      return true
    }
    return 'Please enter a valid email address.'
  }
  return 'Email is required.'
}

export const PasswordValidator = (value: string): boolean | string => {
  if (value) {
    if (value.length >= 8) {
      return true
    }
    return 'Password must be at least 8 characters long.'
  }
  return 'Password is required.'
}
