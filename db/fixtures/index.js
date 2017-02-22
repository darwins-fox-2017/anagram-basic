const fs = require('fs')
let arrWords = fs.readFileSync('words', 'utf-8')
arrWords = arrWords.split('\n')


console.log(arrWords)
