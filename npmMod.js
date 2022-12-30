import chalk from 'chalk'
import validator from 'validator'
const ans = validator.isEmail("abc@gail.com")
console.log(ans?(chalk.green.inverse(ans)):(chalk.red.inverse(ans)))
