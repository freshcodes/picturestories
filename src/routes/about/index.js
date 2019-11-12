import { h } from 'preact'
import style from './style.css'

const About = () => (
  <main class={style.about}>
    <h2>About</h2>
    <p>This was a quick, for-fun app built by <a href='https://fresh.codes'>fresh.codes</a> after someone mentioned using hieroglyphics for communication.</p>
    <p>The categories for hieroglyphs were pulled from <a href='https://en.wikipedia.org/wiki/Gardiner%27s_sign_list'>here</a>.</p>
    <p>The font used to render the hieroglyphs is <a href='https://www.google.com/get/noto/#sans-egyp'>Noto Sans Egyptian Hieroglyphs</a>.</p>
  </main>
)

export default About
