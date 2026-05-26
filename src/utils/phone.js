/** Formatação de telefone BR — portado de teste/js/app.js */

export function formatPhone(digits) {
  const d = digits.replace(/\D+/g, '').slice(0, 11)
  if (d.length <= 10) {
    const p1 = d.slice(0, 2)
    const p2 = d.slice(2, 6)
    const p3 = d.slice(6, 10)
    let out = ''
    if (p1) out += `(${p1}`
    if (p1.length === 2) out += ') '
    if (p2) out += p2
    if (p3) out += '-' + p3
    return out
  }
  const p1 = d.slice(0, 2)
  const p2 = d.slice(2, 7)
  const p3 = d.slice(7, 11)
  let out = ''
  if (p1) out += `(${p1}`
  if (p1.length === 2) out += ') '
  if (p2) out += p2
  if (p3) out += '-' + p3
  return out
}

export function caretIndexFromDigitCount(formatted, digitCount) {
  if (digitCount <= 0) return 0
  let count = 0
  for (let i = 0; i < formatted.length; i++) {
    if (/\d/.test(formatted[i])) {
      count++
      if (count === digitCount) return i + 1
    }
  }
  return formatted.length
}

export function applyPhoneMask(inputEl) {
  const raw = inputEl.value
  const cursor = inputEl.selectionStart || 0
  const digitsBefore = (raw.slice(0, cursor).match(/\d/g) || []).length
  const digits = raw.replace(/\D+/g, '').slice(0, 11)
  const formatted = formatPhone(digits)
  inputEl.value = formatted
  const newCaret = caretIndexFromDigitCount(formatted, Math.min(digitsBefore, digits.length))
  inputEl.setSelectionRange(newCaret, newCaret)
  return formatted
}
