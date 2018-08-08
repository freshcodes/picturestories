import { h } from 'preact'
import style from './style'

import StoryComposer from '../../components/story-composer'

const Home = () => (
  <div class={style.home}>
    <StoryComposer />
  </div>
)

export default Home
