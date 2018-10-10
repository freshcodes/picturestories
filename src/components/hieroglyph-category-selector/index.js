import { h, Component } from 'preact'
import style from './style'

import hieroglyphs from '../../lib/hieroglyphs.js'

export default class HieroglyphCategorySelector extends Component {
  state = {
    category: ''
  }

  categoryChange = (event) => {
    this.setState({ category: event.target.value })
    this.props.onCategoryChange(this.state.category)
  }

  componentDidMount () {
    const max = hieroglyphs.categories.length
    const index = Math.floor(Math.random() * max)
    this.setState({ category: hieroglyphs.categories[index].name })
    this.props.onCategoryChange(this.state.category)
  }

  render () {
    const options = hieroglyphs.categories.map((cat) => (<option value={cat.name}>{cat.name}</option>))
    return (
      <select aria-label='Hieroglyph Categories' class={style.categoryselector} value={this.state.category} onInput={this.categoryChange}>
        {options}
      </select>
    )
  }
}
