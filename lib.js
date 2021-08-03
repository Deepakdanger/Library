let myLibrary = [];
//inputElement = document.getElementById('#book').value;
const books = document.getElementById('book_list');
const form = document.getElementById('forms');
form.addEventListener('submit', (e) => submitFunction(form, e));
const newBook = document.getElementById('addBook');
newBook.addEventListener('click', () => classToggle(form));

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name, author, pages, read) {
    const newBook = new Book(name, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    displayLibrary(myLibrary)
}

function submitFunction(form, e) {
    e.preventDefault();
    const bookInfo = Array.from(form.elements).map((ele) => ele.value);
    const bookRead = Boolean(read1.checked);
    const [name, author, pages] = bookInfo;
    addBookToLibrary(name, author, pages, bookRead);
    form.reset();
}

function displayLibrary(myLibrary) {  
    const para = document.createElement("div");
    const currentDiv  = document.getElementById("book_list");
    let currentTable =myLibrary[myLibrary.length-1];
    para.innerHTML= `${currentTable.name} ${currentTable.author}
    ${currentTable.pages}
    ${currentTable.read}    
    `;
    document.body.insertBefore(para, currentDiv);
} 

function classToggle(form) {
    form.style.visibility = 'visible';
}
