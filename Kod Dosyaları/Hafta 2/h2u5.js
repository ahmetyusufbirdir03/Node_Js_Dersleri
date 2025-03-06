const fs = require("fs")
const chalk = require("chalk")

const book = {
    title : 'Harry Potter and The Chamber of the Secrets',
    author: 'J. K. Rowling',
    year: 1998
}

const bookJSON = JSON.stringify(book)

//* write json file
fs.writeFileSync('book.json',bookJSON)

//* read a buffer
const dataBuffer = fs.readFileSync('book.json')
console.log(chalk.red('Data Buffer:'))
console.log(dataBuffer)

const data = dataBuffer.toString()
console.log(chalk.red('Data:'))
console.log(data)
const parsedData = JSON.parse(data)
console.log(chalk.red('Parsed Data:'))
console.log(parsedData)