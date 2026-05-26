export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
}

export function validateRsvpForm({ nome, email, telefone }) {
  const nomeTrim = nome.trim()
  const emailTrim = email.trim()
  const telefoneTrim = telefone.trim()
  const telDigits = telefoneTrim.replace(/\D+/g, '')

  if (!nomeTrim || !emailTrim || !telefoneTrim) {
    return { valid: false, message: 'Todos os campos são obrigatórios.' }
  }
  if (!isValidEmail(emailTrim)) {
    return { valid: false, message: 'Email inválido.' }
  }
  if (telDigits.length < 10 || telDigits.length > 11) {
    return { valid: false, message: 'Telefone deve ter 10 ou 11 dígitos.' }
  }
  return { valid: true, telDigits }
}
