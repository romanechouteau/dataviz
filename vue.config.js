module.exports = {
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(frag|vert)$/,
          loader: 'raw-loader'
        }
      ]
    }
  }
}
