const fs = require("fs")

const dataBuffer = fs.readFileSync('deneme.json')

const data = dataBuffer.toString()
const parsedData = JSON.parse(data)
parsedData.name = "yusuf"
console.log(parsedData)
