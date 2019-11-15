import getSymbols from './getSymbols'

// https://en.wikipedia.org/wiki/Gardiner%27s_sign_list
const categories = [
  {
    name: 'Man and his occupations',
    codes: { start: 77824, end: 77903 } // 1300 - 1304f
  },
  {
    name: 'Woman and her occupations',
    codes: { start: 77904, end: 77914 } // 13050 - 1305a
  },
  {
    name: 'Anthropomorphic deities',
    codes: { start: 77915, end: 77941 } // 1305b - 13075
  },
  {
    name: 'Parts of the human body',
    codes: { start: 77942, end: 78024 } // 13076 - 130c8
  },
  // There is a chunk of characters that seem to be unclassified (not even in the unclassified classification) here: 130c9 - 130d1
  {
    name: 'Mammals',
    codes: { start: 78034, end: 78077 } // 130d2 - 130fd
  },
  {
    name: 'Parts of mammals',
    codes: { start: 78078, end: 78142 } // 130fe - 1313e
  },
  {
    name: 'Birds',
    codes: { start: 78143, end: 78206 } // 1313f - 1317e
  },
  {
    name: 'Parts of birds',
    codes: { start: 78207, end: 78215 } // 1317f - 13187
  },
  {
    name: 'Amphibious animals, reptiles, etc.',
    codes: { start: 78216, end: 78234 } // 13188 - 1319a
  },
  {
    name: 'Fish and parts of fish',
    codes: { start: 78235, end: 78242 } // 1319b - 131a2
  },
  {
    name: 'Invertebrates and lesser animals',
    codes: { start: 78243, end: 78252 } // 131a3 - 131ac
  },
  {
    name: 'Trees and plants',
    codes: { start: 78253, end: 78318 } // 131ad - 131ee
  },
  {
    name: 'Sky, earth, water',
    codes: { start: 78319, end: 78415 } // 131ef - 1324f
  },
  {
    name: 'Buildings, parts of buildings, etc.',
    codes: { start: 78416, end: 78490 } // 13250 - 1329a
  },
  {
    name: 'Ships and parts of ships',
    codes: { start: 78491, end: 78503 } // 1329b - 132a7
  },
  {
    name: 'Domestics and funerary furniture',
    codes: { start: 78504, end: 78510 } // 132a8 - 132ae
  },
  {
    name: 'Temple furniture and sacred emblems',
    codes: { start: 78511, end: 78544 } // 132af - 132d0
  },
  {
    name: 'Crowns, dress, staves, etc.',
    codes: { start: 78545, end: 78598 } // 132d1 - 13306
  },
  {
    name: 'Warfare, hunting, and butchery',
    codes: { start: 78599, end: 78642 } // 13307 - 13332
  },
  {
    name: 'Agriculture, crafts, and professions',
    codes: { start: 78643, end: 78689 } // 13333 - 13361
  },
  {
    name: 'Rope, fiber, baskets, bags, etc.',
    codes: { start: 78690, end: 78766 } // 13362 - 133ae
  },
  {
    name: 'Vessels of stone and earthenware',
    codes: { start: 78767, end: 78798 } // 133af - 133ce
  },
  {
    name: 'Loaves and cakes',
    codes: { start: 78799, end: 78810 } // 133cf - 133da
  },
  {
    name: 'Writings, games, music',
    codes: { start: 78811, end: 78819 } // 133db - 133e3
  },
  {
    name: 'Strokes, signs derived from Hieratic, geometrical figures',
    codes: { start: 78820, end: 78860 } // 133e4 - 1340c
  },
  {
    name: 'Unclassified',
    codes: { start: 78861, end: 78879 } // 1340d - 1341f
  }
]

const overallRange = { start: 77824, end: 78879 }
const exclusionRange = { start: 78025, end: 78033 }

function randomCharacterInRange () {
  const codePoint = Math.floor(Math.random() * (overallRange.end - overallRange.start)) + overallRange.start
  if (codePoint > exclusionRange.start && codePoint < exclusionRange.end) return randomCharacterInRange()
  else {
    return strFromHex(codePoint.toString(16))
  }
}

function glyphsFromIntRange (range) {
  const arr = []
  for (let i = 0, l = range.end - range.start; i <= l; i++) {
    const num = i + range.start
    const hex = num.toString(16)
    const str = strFromHex(hex)
    arr.push({ num, hex, str })
  }
  return arr
}

function glyphsFromCodesArray (codes) {
  return codes.map((num) => {
    const hex = num.toString(16)
    const str = strFromHex(hex)
    return { num, hex, str }
  })
}

function glyphsByCategoryName (name) {
  const categoryObj = categories.filter((category) => category.name === name)
  return !categoryObj ? [] : glyphsFromIntRange(categoryObj[0].codes)
}

function areCharactersInRange (chars) {
  const symbols = getSymbols(chars)
  for (let i = 0; i <= symbols.length; ++i) {
    if (!this.isCharaterInRange(symbols[i])) return false
  }
  return true
}

function isCharacterInRange (char) {
  const codePoint = char.codePointAt(0)
  return (codePoint >= overallRange.start && codePoint < exclusionRange.start) || (codePoint > exclusionRange.end && codePoint <= overallRange.end)
}

function strFromHex (hex) {
  return String.fromCodePoint(`0x${hex}`)
}

export default {
  glyphsByCategoryName,
  areCharactersInRange,
  isCharacterInRange,
  glyphsFromIntRange,
  glyphsFromCodesArray,
  strFromHex,
  randomCharacterInRange,
  categories
}
