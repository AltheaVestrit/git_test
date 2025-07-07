function Book(name, author, pages, status) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    };
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function () {
        return `${this.name} by ${this.author}, ${this.pages} pages, ${this.status}`;
    };
};

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
console.log(theHobbit.info());