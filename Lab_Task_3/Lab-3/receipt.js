let name = localStorage.getItem("studentName");
let books = JSON.parse(localStorage.getItem("books"));

let receipt = document.getElementById("receipt");

receipt.innerHTML = "Name: " + name + "<br>" + "Books:<br>";

for (let i = 0; i < books.length; i++) {
    receipt.innerHTML += books[i] + "<br>";
}

receipt.innerHTML += "Total Deposit: " + (books.length * 200) + " Taka";

function goBack() {
    window.location.href = "index.html";
}