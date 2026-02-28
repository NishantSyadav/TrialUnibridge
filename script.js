// Signup
function signup() {
    let user = document.getElementById("signupUser").value;
    let pass = document.getElementById("signupPass").value;

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("Signup successful!");
    window.location.href = "login.html";
}

// Login
function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    if (
        user === localStorage.getItem("user") &&
        pass === localStorage.getItem("pass")
    ) {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials");
    }
}

// Logout
function logout() {
    alert("Logged out");
    window.location.href = "login.html";
}

// Add Notes
function addNote() {
    let input = document.getElementById("noteInput");
    let container = document.getElementById("notesContainer");

    if (!input || !container) return;

    let div = document.createElement("div");
    div.className = "card";
    div.innerText = input.value;

    container.appendChild(div);
    input.value = "";
}