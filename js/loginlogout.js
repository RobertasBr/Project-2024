document.addEventListener('DOMContentLoaded', function () {
    updateLoginLogoutButton();

    document.getElementById('loginLogoutBtn').addEventListener('click', function () {
        toggleLoginStatus();
    });
});

function updateLoginLogoutButton() {
    const isLoggedIn = localStorage.getItem('loggedIn') === '1';

    const loginLogoutBtn = document.getElementById('loginLogoutBtn');

    if (isLoggedIn) {
        loginLogoutBtn.textContent = 'Logout';
    } else {
        loginLogoutBtn.textContent = 'Login';
    }
}

function toggleLoginStatus() {
    const isLoggedIn = localStorage.getItem('loggedIn') === '1';

    if (isLoggedIn) {
        localStorage.setItem('loggedIn', '0');
    } else {
        localStorage.setItem('loggedIn', '1');
    }

    updateLoginLogoutButton();
}