import { h } from 'preact'
import style from './style.css'

import StoryComposer from '../../components/story-composer'

const Home = () => (
  <main class={style.home}>
    <StoryComposer />
  </main>
)

export default Home
