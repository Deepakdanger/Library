let myLibrary = [];
//inputElement = document.getElementById('#book').value;
const books = document.getElementById('book_list');

const form = document.getElementById('forms');
form.addEventListener('submit', (e) => submitFunction(form, e));

const newBook = document.getElementById('addBook');
newBook.addEventListener('click', () => classToggle(form));

const readToggle = document.getElementById('readen');

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
    books.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        const para = document.createElement("div");
        // const deleteBook = document.createElement("BUTTON");
        // deleteBook.innerHTML = "Delete";
        //deleteBook.onclick = deletethisBook(i,myLibrary);
        const currentDiv  = document.getElementById("book_list");
        let currentTable = myLibrary[i];
        para.innerHTML= `${currentTable.name} ${currentTable.author}
        ${currentTable.pages}
        ${currentTable.read} <button onclick = deletethisBook(${i},myLibrary)> Delete </button>
        <button onclick = changeStatus(${i},myLibrary)> Change Status</button>
        `;
        // para.appendChild(deleteBook); 
        // const delete1 = para.lastChild;
        // console.log(delete1);
        currentDiv.appendChild(para);
    }
    
} 

function classToggle(form) {
    form.style.visibility = 'visible';
}

function deletethisBook(i, myLibrary) {
    myLibrary.splice(i,1);
    displayLibrary(myLibrary);
}

function changeStatus(i, myLibrary) {
    myLibrary[i].read = !myLibrary[i].read;
    displayLibrary(myLibrary);
}