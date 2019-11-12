import { h, Component } from 'preact'
import { route } from 'preact-router'
import LZString from 'lz-string'
import style from './style.css'

import HieroglyphChart from '../../components/hieroglyph-chart'
import StoryBoard from '../../components/story-board'

export default class StoryComposer extends Component {
  state = {
    glyphs: [],
    saving: false
  }

  addGlyph = (glyph, index) => {
    const glyphs = this.state.glyphs
    glyphs.push(glyph)
    this.setState({ glyphs: this.state.glyphs })
  }

  removeGlyph = (glyph, index) => {
    const glyphs = this.state.glyphs
    glyphs.splice(index, 1)
    this.setState({ glyphs: glyphs })
  }

  shareStory = () => {
    let codes = this.state.glyphs.map(glyph => glyph.num).join(',')
    let compressed = LZString.compressToEncodedURIComponent(codes)
    route(`/story?${compressed}`)
  }

  render () {
    return (
      <div class={style.storycomposer}>
        <StoryBoard glyphs={this.state.glyphs} onGlyphClick={this.removeGlyph} emptyMessage='Click Hieroglyphs below to create your story' />
        <button onClick={this.shareStory} disabled={!this.state.glyphs.length || this.state.saving}>Share Story</button>
        <HieroglyphChart onGlyphClick={this.addGlyph} />
      </div>
    )
  }
}
