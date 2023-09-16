// import Book and Library

const {Book} = require("./Book")

const Library = require("./Library")

//make a library
let newLibrary = new Library();

let coolProgrammingBook = new Book("JS Things")
let coolPokemonBook = new Book("Catch em all")

newLibrary.books.push(coolProgrammingBook, coolPokemonBook)

console.log(newLibrary.books);

let {Media} = require("./Media")
console.log(Media.count)