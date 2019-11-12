import { h, Component } from 'preact'
import style from './style.css'

import hieroglyphs from '../../lib/hieroglyphs.js'

export default class HieroglyphCategorySelector extends Component {
  state = {
    category: ''
  }

  categoryChange = (event) => {
    let category = event.target.value
    this.setState({ category })
    this.props.onCategoryChange(category)
  }

  componentDidMount () {
    const max = hieroglyphs.categories.length
    const index = Math.floor(Math.random() * max)
    let category = hieroglyphs.categories[index].name
    this.setState({ category })
    this.props.onCategoryChange(category)
  }

  render () {
    const options = hieroglyphs.categories.map((cat) => (<option value={cat.name}>{cat.name}</option>))
    return (
      <select aria-label='Hieroglyph Categories' class={style.categoryselector} value={this.state.category} oninput={this.categoryChange}>
        {options}
      </select>
    )
  }
}
