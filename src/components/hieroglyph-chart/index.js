import { h, Component } from 'preact'
import style from './style.css'

import hieroglyphs from '../../lib/hieroglyphs.js'
import HieroglyphCategorySelector from '../hieroglyph-category-selector'
import Hieroglyph from '../hieroglyph'

export default class HieroglyphChart extends Component {
  state = {
    glyphs: []
  }

  onGlyphClick = (glyph, index) => {
    if (this.props.onGlyphClick) this.props.onGlyphClick(glyph, index)
  }

  onCategoryChange = (categoryName) => {
    this.setState({ glyphs: hieroglyphs.glyphsByCategoryName(categoryName) })
  }

  render () {
    const glyphs = this.state.glyphs.map((glyph, index) => <Hieroglyph index={index} onGlyphClick={(event) => this.onGlyphClick(glyph, index)} glyph={glyph} />)
    return (
      <div class={style.chart}>
        <HieroglyphCategorySelector onCategoryChange={this.onCategoryChange} />
        <div>
          {glyphs}
        </div>
      </div>
    )
  }
}
