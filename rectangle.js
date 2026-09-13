class rectangle {
    constructor(name, name1) {
        this.name = name
        this.name1 =name1
    }

    s() {
        return this.name * this.name1
    }

    p() {
        return (this.name + this.name1)*2
    }
}

const rectangele = new rectangle(10, 5)

console.log(rectangele.p());


class Book {
    constructor(name, author, year, pages, isAllowed, ageLimit) {
        this.name = name
        this.author = author
        this.year = year
        this.pages = pages
        this.isAllowed = isAllowed
        this.ageLimit = ageLimit
    }

    info() {
        console.log(`Книга "${this.name}" написанна автором ${this.author} в ${this.year} на ${this.pages} страниц. Возрастное ограничение: ${this.ageLimit}+`)
    }

    getBook(person) {
        if (!this.isAllowed) {
            throw new Error('Книга недоступна')
        }
        if (person.age < this.ageLimit) {
            throw new Error('Возраст читателя не подходит')
        }
        if (person.books.length >= 3) {
            throw new Error('Нельзя взять больше 3 книг')
        }
        person.addBook(this)
        this.isAllowed = false
    }

    returnBook() {
        this.isAllowed = true
    }
}

class Person {
    constructor(name, age, number, books) {
        this.name = name
        this.age = age
        this.number = number
        this.books = books
    }

    info() {
        const booksNames = []
        this.books.forEach(book => {
            booksNames.push(book.name)
        });
        console.log(`Имя - ${this.name}. Возраст - ${this.age}. Номер читательского билета - ${this.number}. Взятые книги - ${booksNames.length==0 ? "нет" : booksNames.toString()}`);
    }

    getBook(book) {
        this.books.push(book)
    }

    returnBook(book) {
        book.returnBook()
        this.books = this.books.filter(bookName => bookName !== book)
    }

    hasBook(book) {
        return this.books.includes(book)
    }
}



const newBook1 = new Book('У лукоморья дуб срубили', 'Mark Strelkov', 2026, 1, true, 12)
const newPerson = new Person('Alex', 23, 333333, [])
const newBook2 = new Book('Чернозём', 'Mark Strelkov', 2025, 1112, true, 18)
const newBook3 = new Book('Китайская газета - Куйвам Куйнам', 'Mark Strelkov', 2024, 132, true, 0)
const newBook4 = new Book('50 оттенков сероBо', 'Mark Strelkov', 2023, 1100, true, 18)



newPerson.getBook(newBook1)
newPerson.info()
console.log(`
    
    
    `);
newPerson.returnBook(newBook1)
newPerson.info()
console.log(`
    
    
    `);
newPerson.getBook(newBook2)
newPerson.getBook(newBook3)
newPerson.getBook(newBook4)
newPerson.info()
console.log(`
    
    
    `);

console.log(newPerson.hasBook(newBook2));