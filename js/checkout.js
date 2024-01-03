function payNow() {
    var cardNumber = document.getElementById('cardNumber').value;
    var expiryDate = document.getElementById('expiryDate').value;
    var cvv = document.getElementById('cvv').value;
    var cardHolderName = document.getElementById('cardHolderName').value;

    if (cardNumber.length !== 16) {
        alert('Please enter a valid 16-digit card number.');
        return;
    }

    if (expiryDate.trim() === '') {
        alert('Please enter the expiry date.');
        return;
    }

    if (cvv.trim() === '') {
        alert('Please enter the CVV.');
        return;
    }

    if (cardHolderName.trim() === '') {
        alert('Please enter the cardholder name.');
        return;
    }

    var toast = new bootstrap.Toast(document.getElementById('successToast'));
    toast.show();
}


const isLoggedIn = localStorage.getItem('loggedIn');

if (!isLoggedIn || isLoggedIn !== '1') {
    window.location.href = "login.html";
}