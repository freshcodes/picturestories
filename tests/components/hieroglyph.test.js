import { h } from 'preact'
import Hieroglyph from '../../src/components/hieroglyph'
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme'

import hieroglyphs from '../../src/lib/hieroglyphs'

const glyphs = hieroglyphs.glyphsByCategoryName('Unclassified')

describe('Hieroglyph', () => {
  test('onclick', () => {
    expect.assertions(2)

    const onclick = function (glyph, index) {
      expect(glyph).toStrictEqual(glyphs[0])
      expect(index).toStrictEqual(0)
    }

    const context = shallow(<Hieroglyph glyph={glyphs[0]} index={0} onGlyphClick={onclick} />)

    context.find('button').simulate('click')
  })
})
