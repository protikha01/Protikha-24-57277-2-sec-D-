let books = [];

function addBook() {
    let bookBox = document.getElementById("book");
    let title = bookBox.value.trim();

    if (title === "") {
        alert("Please enter a book title.");
        return;
    }

    if (books.length >= 3) {
        alert("You can borrow a maximum of 3 books.");
        return;
    }

    books.push(title);
    bookBox.value = "";
    alert("Book Added");
}

function confirmBorrow() {
    let name = document.getElementById("studentName").value.trim();

    if (name === "") {
        alert("Please enter the student name.");
        return;
    }

    if (books.length === 0) {
        alert("Please add at least one book before confirming.");
        return;
    }

    localStorage.setItem("studentName", name);
    localStorage.setItem("books", JSON.stringify(books));

    window.location.href = "receipt.html";
}
