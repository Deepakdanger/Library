let myLibrary = [];
//inputElement = document.getElementById('#book').value;
const books = document.getElementById('book_list');
const form = document.getElementById('forms');

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name, author, pages, read) {
    const newb = new Book(name, author, pages, read);
    myLibrary.push(newb);
}

function submit(form, event, readCheck) {
    event.preventDefault();
    const bookInfo = Array.from(form.elements).map((ele) => ele.value);
    const readStatus = Boolean(readCheck.checked);
    submitBook(bookInfo, readStatus);
    form.reset();
}

function submitBook(bookInfo, readStatus) {
    const [name, author, pages] = bookInfo;
    addBookToLibrary(name, author, pages, readStatus);
}

const list = document.createElement('ul');
books.appendChild(list);

form.addEventListener('submit', (event) => submit(form, event, readCheck));

