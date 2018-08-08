const { generateSw } = require('preact-cli-workbox-plugin')
export default function(config, env, helpers) {
  return generateSw(config, helpers, {})
}
