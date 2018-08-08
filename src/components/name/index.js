import { h, Component } from 'preact'
import style from './style'

import hieroglyphs from '../../lib/hieroglyphs.js'

class Letter extends Component {
  componentWillMount () {
    this.animate()
  }

  animate = () => {
    if (this.state.finished === false) return
    const [max, min] = [30, 15]
    this.count = Math.floor(Math.random() * (max - min) + min)
    this.frameDelay = 100
    setTimeout(this.frame, this.frameDelay)
  }

  frame = () => {
    this.count -= 1
    if (this.count === 0) {
      this.setState({ finished: true, currentChar: this.props.letter })
    } else {
      this.setState({ finished: false, currentChar: hieroglyphs.randomCharacterInRange() })
      setTimeout(this.frame, this.frameDelay)
    }
  }

  render (_, { currentChar, finished }) {
    return (
      <span onClick={this.animate} class={style.letter}>{currentChar}</span>
    )
  }
}

export default class Name extends Component {
  render ({ name }) {
    const letters = name.split('').map((char) => <Letter letter={char} />)
    return (
      <div>
        {letters}
      </div>
    )
  }
}
