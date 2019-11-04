const chalk = require('chalk')
const log = console.log

module.exports = {
    success(text){
        log(chalk.green(text))
    },
    info(text) {
        log(chalk.yellow(text))
    },
    error(text) {
        log(chalk.red(text))
    }
}