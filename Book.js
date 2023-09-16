// DIrect variable = default export
//const Media = require("./Media")

// Destructured variable = module.exports
const {Media} = require("./Media");

class Book extends Media {
    constructor(newName){
        super(newName);

    }
}

// let someBook = new Book("Twilight");
// console.log(someBook.name);

module.exports = {
    Book
}