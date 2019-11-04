const path = require('path')
const resolve = (dir) => path.join(__dirname, '../', dir)

module.exports = {
    entry: {
        app: resolve('src/index.jsx')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css', '.less'],
        alias: {
            '@': resolve('src')
        }
    }
}