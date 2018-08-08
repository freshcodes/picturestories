import { h, Component } from 'preact'
import style from './style'

import firebase from 'firebase/app'
import StoryBoard from '../../components/story-board'

export default class Story extends StoryBoard {
  state = {
    glyphs: []
  }

  componentDidMount () {
    firebase.firestore().collection('stories').doc(this.props.storyId)
      .onSnapshot((doc) => {
        this.setState({ glyphs: doc.data().glyphs })
      })
  }

  render () {
    return (
      <div class={style.story}>
        <StoryBoard glyphs={this.state.glyphs} emptyMessage='Loading...' />
      </div>
    )
  }
}
