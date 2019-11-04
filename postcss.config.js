const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = {
    plugins: [
      autoprefixer(),
      // pxtorem({
      //   rootValue: 75,
      //   propList: ['*'],
      //   selectorBlackList: ['html']
      // })
    ]
  }