export function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email) && email !== "";
}

export function isValidName(name) {
  return name !== "";
}

export function isValidMessage(message) {
  return message !== "";
}
