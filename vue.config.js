module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
    
}
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/projectucse/'
      : '/'
  }