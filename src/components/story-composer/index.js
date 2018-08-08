import { h, Component } from 'preact'
import style from './style'

import HieroglyphChart from '../../components/hieroglyph-chart'
import StoryBoard from '../../components/story-board'

export default class StoryComposer extends Component {
  state = {
    glyphs: []
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

  saveStory = () => {
    console.log('need to save story')
  }

  render () {
    return (
      <div class={style.storycomposer}>
        <StoryBoard glyphs={this.state.glyphs} onGlyphClick={this.removeGlyph} />
        <button onClick={this.saveStory} disabled={!this.state.glyphs.length}>Save Story</button>
        <HieroglyphChart onGlyphClick={this.addGlyph} />
      </div>
    )
  }
}
