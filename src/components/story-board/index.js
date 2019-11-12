import { h, Component } from 'preact'
import style from './style.css'

import Hieroglyph from '../hieroglyph'

export default class StoryBoard extends Component {
  onGlyphClick = (glyph, index) => {
    if (this.props.onGlyphClick) this.props.onGlyphClick(glyph, index)
  }

  render () {
    const glyphs = (this.props.glyphs || []).map((glyph, index) => <Hieroglyph index={index} onGlyphClick={(event) => this.onGlyphClick(glyph, index)} glyph={glyph} />)
    const emptyMessage = <p>{this.props.emptyMessage}</p>
    return (
      <div class={style.storyboard}>
        {glyphs.length ? glyphs : emptyMessage}
      </div>
    )
  }
}
