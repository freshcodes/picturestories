import { h, Component } from 'preact'
import { route } from 'preact-router'
import style from './style'

import firebase from 'firebase/app'
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

  saveStory = () => {
    this.setState({ saving: true })
    firebase.firestore().collection('stories').add({
      glyphs: this.state.glyphs
    }).then((docRef) => {
      this.setState({ saving: false })
      route(`/story/${docRef.id}`)
    }).catch((error) => {
      this.setState({ saving: false })
      console.error("Error adding document: ", error)
    })
  }

  render () {
    return (
      <div class={style.storycomposer}>
        <StoryBoard glyphs={this.state.glyphs} onGlyphClick={this.removeGlyph} emptyMessage="Click Hieroglyphs below to create your story" />
        <button onClick={this.saveStory} disabled={!this.state.glyphs.length || this.state.saving}>Save Story</button>
        <HieroglyphChart onGlyphClick={this.addGlyph} />
      </div>
    )
  }
}
