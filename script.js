const library = [];
//isbn;title;author;year
let inputData = prompt('Enter book data separate by ";"');
while (inputData) {
    //TODO create and add to library only unique book by isbn
    const bookData = inputData.split(';');
    if (
        bookData.length === 4 &&
        bookData[0] &&
        bookData[1] &&
        bookData[2] &&
        bookData[3] &&
        findBook(library, bookData[0])
    ) {
        const newBook = new Book(bookData[0], bookData[1], bookData[2], bookData[3]);
        library.push(newBook);
    }
    inputData = prompt('Enter book data separate by ";"');
}

printLibrary(library);

function printLibrary(library) {
    //TODO print all books to console
    for (let i = 0; i < library.length; i++) {
        console.log(library[i].toString());
    }
}

function findBook(library, isbn) {
    //TODO return index if book exists, otherwise return -1
    for (let i = 0; i < library.length; i++) {
        if (isbn === library[i].isbn) {
            return i;
        }
    }
    return -1;
}


function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, TITLE: ${this.title}, AUTHOR: ${this.author}, YEAR: ${this.year}`; // TODO Complete toString
    }
}