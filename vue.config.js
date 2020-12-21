module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/projectucse/'
    : '/'
    ,
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}