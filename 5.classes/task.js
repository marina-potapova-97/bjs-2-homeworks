class PrintEditionItem {
    #state;
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.#state = 100;
        this.type = null;
    }
    get state() {
        return this.#state;
    }
    set state(newState) {
        if (typeof newState !== "number") {
            console.error("Состояние должно быть числом.");
            return;
        }
        if (newState < 0) {
            this.#state = 0;
        } else if (newState > 100) {
            this.#state = 100;
        } else {
            this.#state = newState;
        }
    }
    fix() {
        const currentState = this.state;

        const newState = currentState * 1.5;
        this.state = newState;
    }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book && typeof book.state === "number" && book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (const book of this.books) {
            if (book.hasOwnProperty(type) && book[type] === value) {
                return book;
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex((book) => book.name === bookName); // Находим индекс книги по названию

        if (bookIndex !== -1) {
            const removedBook = this.books.splice(bookIndex, 1)[0];
            return removedBook;
        } else {
            return null;
        }
    }
}
