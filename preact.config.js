const WorkboxPlugin = require('workbox-webpack-plugin')

export default config => {
  config.plugins.push(
    new WorkboxPlugin.InjectManifest({
      swSrc: './service-worker.js',
      swDest: './sw.js',
      include: [/\.html$/, /\.js$/, /\.svg$/, /\.css$/, /\.png$/, /\.ico$/, /\.woff2$/]
    })
  )

  return config
}
