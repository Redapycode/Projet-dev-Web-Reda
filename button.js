
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get("mode");

    let login = document.getElementById("loginBox");
    let signup = document.getElementById("signupBox");

    if (mode === "signup") {
        login.style.display = "none";
        signup.style.display = "block";
    } else {
        login.style.display = "block";
        signup.style.display = "none";
    }
};