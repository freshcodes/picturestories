import { h } from 'preact'
import style from './style.css'

export default function ({ glyph, index, onGlyphClick }) {
  onGlyphClick = onGlyphClick || function () {}
  return (
    <button type='button' class={style.hieroglyph + ' hieroglyph'} onClick={(event) => onGlyphClick(glyph, index)}>{glyph.str}</button>
  )
}
