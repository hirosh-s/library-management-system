function login() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if (u === "admin" && p === "admin") {
        window.location.href = "home.html";
    } else {
        alert("Invalid login");
    }
}

function addBook() {
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;

    if (name === "" || author === "") {
        alert("Fill all fields");
        return;
    }

    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.push({ name, author });
    localStorage.setItem("books", JSON.stringify(books));

    alert("Book added");
}

window.onload = function () {
    let list = document.getElementById("bookList");
    if (!list) return;

    let books = JSON.parse(localStorage.getItem("books")) || [];

    books.forEach((b, index) => {
        let li = document.createElement("li");
        li.innerHTML = b.name + " - " + b.author +
            " <button onclick='deleteBook(" + index + ")'>Delete</button>";
        list.appendChild(li);
    });
};

function deleteBook(i) {
    let books = JSON.parse(localStorage.getItem("books"));
    books.splice(i, 1);
    localStorage.setItem("books", JSON.stringify(books));
    location.reload();
}
