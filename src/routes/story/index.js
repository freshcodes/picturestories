import { h, Component } from 'preact'
import LZString from 'lz-string'
import style from './style.css'
import hieroglyphs from '../../lib/hieroglyphs.js'

import StoryBoard from '../../components/story-board'

export default class Story extends Component {
  state = {
    glyphs: []
  }

  componentDidMount () {
    const compressed = window.location.search.substring(1)
    const codes = LZString.decompressFromEncodedURIComponent(compressed).split(',').map(code => parseInt(code, 10))
    const glyphs = hieroglyphs.glyphsFromCodesArray(codes)
    this.setState({ glyphs })
  }

  render () {
    return (
      <main class={style.story}>
        <StoryBoard glyphs={this.state.glyphs} emptyMessage='Loading...' />
      </main>
    )
  }
}
