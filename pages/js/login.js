var loginStatus = document.getElementById('user-login');
loginStatus.addEventListener("submit", loginUser);

function loginUser(event) {
    event.preventDefault();

    var email = document.getElementById('emailAddressID').value;
    var password = document.getElementById('passwordID').value;

    if (email == "wmitty@email.com" && password == "password1") {
        localStorage.setItem('loggedIn', 1);
        window.location.href = "pages/shop.html";
    } else {
        localStorage.setItem('loggedIn', 0);
        var element = document.getElementById("loginerror");
        element.classList.remove("d-none");
    }
}

function redirectToShop() {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = "pages/shop.html";
    return false;
}