/* eslint-disable no-use-before-define */
const myLibrary = [];
const books = document.getElementById('book_list');

const form = document.getElementById('forms');
const read1 = document.getElementById('read1');

const newBook = document.getElementById('addBook');

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function deletethisBook(i, myLibrary) {
  myLibrary.splice(i, 1);
  displayLibrary(myLibrary);
}

function changeStatus(i, myLibrary) {
  myLibrary[i].read = !myLibrary[i].read;
  displayLibrary(myLibrary);
}

function displayLibrary(myLibrary) {
  books.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i += 1) {
    const para = document.createElement('div');
    const currentDiv = document.getElementById('book_list');
    const currentTable = myLibrary[i];
    para.innerHTML = `${currentTable.name} ${currentTable.author}
          ${currentTable.pages}
          ${currentTable.read} <button onclick = ${deletethisBook(i, myLibrary)}> Delete </button>
          <button onclick = ${changeStatus(i, myLibrary)}> Change Status</button>
          `;
    currentDiv.appendChild(para);
  }
}

function addBookToLibrary(name, author, pages, read) {
  const newBook = new Book(name, author, pages, read);
  myLibrary.push(newBook);
  displayLibrary(myLibrary);
}

function classToggle(form) {
  form.style.visibility = 'visible';
}

function submitFunction(form, e, read1) {
  e.preventDefault();
  const bookInfo = Array.from(form.elements).map((ele) => ele.value);
  const bookRead = Boolean(read1.checked);
  const [name, author, pages] = bookInfo;
  addBookToLibrary(name, author, pages, bookRead);
  form.reset();
  classToggle(form);
}

form.addEventListener('submit', (e) => submitFunction(form, e, read1));

newBook.addEventListener('click', () => classToggle(form));