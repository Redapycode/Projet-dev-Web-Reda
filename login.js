function toggle() {
    let login = document.getElementById("loginBox");
    let signup = document.getElementById("signupBox");

    if (login.style.display === "none") {
        login.style.display = "block";
        signup.style.display = "none";
    } else {
        login.style.display = "none";
        signup.style.display = "block";
    }
}
