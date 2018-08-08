import { h } from 'preact'
import { Link } from 'preact-router/match'
import style from './style'

import Name from '../name'

const Header = () => (
  <header class={style.header}>
    <h1>
      <Name name='Picture&nbsp;Stories' />
    </h1>
    <nav>
      <Link activeClassName={style.active} href='/'>Create Story</Link>
      {/* <Link activeClassName={style.active} href='/profile'>Recent Stories</Link> */}
      <Link activeClassName={style.active} href='/about'>About</Link>
    </nav>
  </header>
)

export default Header
