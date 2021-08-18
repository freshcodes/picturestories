const CopyWebpackPlugin = require('copy-webpack-plugin')

export default config => {
  config.plugins.push(new CopyWebpackPlugin({
    patterns: [
      { from: 'assets/robots.txt' },
      { from: 'assets/browserconfig.xml' },
      { from: 'assets/CNAME' }
    ]
  }))

  return config
}
