document.getElementById('submit-btn').addEventListener('click', function () {
    const emailInput = document.getElementById('email-input');
    const emailInputString = emailInput.value;
    // const emailInputNumber = parseFloat(emailInputString);

    const passwordInput = document.getElementById('password-input')
    const passwordInputString = passwordInput.value;
    // const passwordInputNumber = parseFloat(passwordInputString);

    if (emailInputString === 'ashikbillah699@gmail.com' && passwordInputString === '8456') {
        window.location.href = 'bank.html'
    }
    else {
        alert('fuck you')
    }
})