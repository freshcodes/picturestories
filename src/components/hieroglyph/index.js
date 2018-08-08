import { h } from 'preact'
import style from './style'

export default function ({ glyph, index, onGlyphClick }) {
  onGlyphClick = onGlyphClick || function () {}
  return (
    <div class={style.hieroglyph + ' hieroglyph'} onClick={(event) => onGlyphClick(glyph, index)}>{glyph.str}</div>
  )
}
