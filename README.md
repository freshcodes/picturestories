# Picture Stories

[![Greenkeeper badge](https://badges.greenkeeper.io/freshcodes/picturestories.svg)](https://greenkeeper.io/)

This was a quick, for-fun PWA built after someone mentioned using hieroglyphics for communication.

Turned out to be a lesson in [unicode issues in JavaScript](https://mathiasbynens.be/notes/javascript-unicode).

This was originally built on Firebase and stories could be saved there. Firebase was later removed in favor of just sharing URLs with enough information to rebuild the story. [lz-string](https://github.com/pieroxy/lz-string) is used to compress the integer values of each glyph and passed as the query string.

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run tests with jest and preact-render-spy 
npm run test
```
