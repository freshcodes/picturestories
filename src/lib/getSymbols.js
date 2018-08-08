function getSymbols (string) {
  let index = 0
  const length = string.length
  const output = []
  for (; index < length - 1; ++index) {
    let charCode = string.charCodeAt(index)
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      charCode = string.charCodeAt(index + 1)
      if (charCode >= 0xDC00 && charCode <= 0xDFFF) {
        output.push(string.slice(index, index + 2))
        ++index
        continue
      }
    }
    output.push(string.charAt(index))
  }
  output.push(string.charAt(index))
  return output
}

module.exports = getSymbols
