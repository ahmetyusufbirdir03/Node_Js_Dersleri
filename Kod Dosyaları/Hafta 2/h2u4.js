//* JavaScript nesnesi
const book = {
    title : 'başlık',
    author: 'gövde',
    year: 1924
}

console.log(book + "\n")
console.log(book.year + "\n")

//* JSON 
const bookJSON = JSON.stringify(book)
console.log(bookJSON + "\n")

//* JSON Parse func
const parsedBook = JSON.parse(bookJSON)
console.log(parsedBook + "\n")

//* JSON İçeriğine erişme
console.log(bookJSON.author + "\n") //! tanımlanamaz hatası