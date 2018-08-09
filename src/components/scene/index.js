import { h } from 'preact'
import style from './style'

const Scene = () => (
  <div class={style.container}>
    <div class={style.sand}>
      <div class={style.pyramid1} />
      <div class={style.pyramids} />
      <div class={style.camel1} />
    </div>
  </div>
)

export default Scene
