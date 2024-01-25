const library = [];
//isbn;title;author;year
let inputData = prompt('Enter book data separate by ";"');
while (inputData) {
    //TODO create and add to library only unique book by isbn

    inputData = prompt('Enter book data separate by ";"');
}

printLibrary(library);

function printLibrary(library) {
    //TODO print all books to console
}

function findBook(library, isbn) {
    //TODO return index if book exists, otherwise return -1
}


function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISB: ${this.isbn}, ...`; // TODO Complete toString
    }
}