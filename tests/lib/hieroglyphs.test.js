import hieroglyphs from '../../src/lib/hieroglyphs'

describe('hieroglyphs', () => {
  test('glyphsFromIntRange', () => {
    const range = { start: 78861, end: 78862 }
    const glyphs = hieroglyphs.glyphsFromIntRange(range)

    expect(glyphs.length).toStrictEqual(2)

    expect(glyphs[0].num).toStrictEqual(78861)
    expect(glyphs[0].hex).toStrictEqual('1340d')
    expect(glyphs[0].str).toStrictEqual(hieroglyphs.strFromHex('1340d'))

    expect(glyphs[1].num).toStrictEqual(78862)
    expect(glyphs[1].hex).toStrictEqual('1340e')
    expect(glyphs[1].str).toStrictEqual(hieroglyphs.strFromHex('1340e'))
  })

  test('glyphsFromIntRange', () => {
    const codes = [78861, 78862]
    const glyphs = hieroglyphs.glyphsFromCodesArray(codes)

    expect(glyphs.length).toStrictEqual(2)

    expect(glyphs[0].num).toStrictEqual(78861)
    expect(glyphs[0].hex).toStrictEqual('1340d')
    expect(glyphs[0].str).toStrictEqual(hieroglyphs.strFromHex('1340d'))

    expect(glyphs[1].num).toStrictEqual(78862)
    expect(glyphs[1].hex).toStrictEqual('1340e')
    expect(glyphs[1].str).toStrictEqual(hieroglyphs.strFromHex('1340e'))
  })
})
