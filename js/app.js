"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var enums_1 = require("./enums");
var encyclopedia_1 = require("./encyclopedia");
var shelf_1 = require("./shelf");
var snakeCaseTitle = _.snakeCase('For Whom the Bell tolls');
console.log(snakeCaseTitle);
var reference = new encyclopedia_1.default('Fact Book', 2016, 1);
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: enums_1.Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: enums_1.Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: enums_1.Category.Fiction }
    ];
    return books;
}
function LogFirstAvailable(books) {
    if (books === void 0) { books = GetAllBooks(); }
    var firstAvailable = '';
    var numberOfBooks = books.length;
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    console.log('Getting books in category: ' + enums_1.Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookByID(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function CreateCustomerID(name, id) {
    return name + id;
}
function CreateCustomer(name, age, city) {
    console.log('Creating customer ' + name);
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('City: ' + city);
    }
}
function CheckoutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log('Checking out books for ' + customer);
    var booksCheckedOut = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book = GetBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        // get all books by a particular author
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    if (typeof bookProperty == 'boolean') {
        // get all books by a particular author
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function PrintBook(book) {
    console.log(book.title + ' by ' + book.author);
}
//********************************************************************
var inventory = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: enums_1.Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: enums_1.Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: enums_1.Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: enums_1.Category.Software }
];
/* let purgedBooks: Array<Book> = Purge<Book>(inventory);
purgedBooks.forEach(book => console.log(book.title));

let purgedNums: Array<number> = Purge<number>([1, 2, 3, 4]);
console.log(purgedNums); */
var bookShelf = new shelf_1.default();
inventory.forEach(function (book) { return bookShelf.add(book); });
var firstBook = bookShelf.getFirst();
var magazines = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
var magazineShelf = new shelf_1.default();
magazines.forEach(function (mag) { return magazineShelf.add(mag); });
var firstMagazine = magazineShelf.getFirst();
/* let numberShelf: Shelf<number> = new Shelf<number>();
[5, 10, 15].forEach(num => numberShelf.add(num)); */
magazineShelf.printTitles();
var softwareBook = bookShelf.find('Code Complete');
console.log(softwareBook.title + " (" + softwareBook.author + ")");
/*let ref: ReferenceItem = new ReferenceItem('Updated Facts and Figures', 2012);
ref.printItem();
ref.publisher = 'Random Date Publishing';
console.log(ref.publisher); */
// let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 1900, 10);
// refBook.printCitation();
/*let Newspaper = class extends ReferenceItem {
    printCitation(): void {
        console.log(`Newspaper: ${this.title}`);
    }
};

let myPaper = new Newspaper('The Gazette', 2016);
myPaper.printCitation();

class Novel extends class { title: string } {
    mainCharacter: string;
}

let favoriteNovel = new Novel();
favoriteNovel.mainCharacter = "";*/
/* let favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Sharon';
favoriteLibrarian.assistCustomer('Lynda'); */
/* let myBook: Book = {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    available: true,
    category: Category.Fiction,
    pages: 250,

    markDamaged: (reason: string) => console.log('Damaged: ' + reason)
};

let logDamage: DamageLogger;
logDamage = (damage: string) => console.log('Damage reported: ' + damage);
logDamage('coffee stains'); */
/* PrintBook(myBook);
myBook.markDamaged('torn pages'); */
// let hermansBooks = GetTitles(false);
//let hermansBooks = GetTitles('Herman Melville');
// hermansBooks.forEach(title => console.log(title));
/*let myBooks: string[] = CheckoutBooks('Thorne', 1, 3, 4);
myBooks.forEach(title => console.log(title));*/
//LogFirstAvailable();
/*let poetryBooks = GetBookTitlesByCategory(Category.Poetry);
poetryBooks.forEach(title => console.log(title));*/
//CreateCustomer('Michelle');
//CreateCustomer('Michelle', 6);
//CreateCustomer('Michelle', 6, 'Atlanta');
/*let x: number;
x = 5;


let IdGenerator: (chars: string, nums: number) => string;
IdGenerator = (name: string, id: number) => { return id + name; };

let myID: string = IdGenerator('daniel', 15);
console.log(myID);*/
/*const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));*/
process.stdin.resume();
//# sourceMappingURL=app.js.map