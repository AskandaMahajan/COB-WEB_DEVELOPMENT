document.getElementById('signup-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default link behavior

    var signupForm = document.getElementById('signup-form');
    var loginBox = document.querySelector('.login-box');

    if (signupForm.style.display === 'none' || signupForm.style.display === '') {
        signupForm.style.display = 'block';
        loginBox.style.display = 'none';
    } else {
        signupForm.style.display = 'none';
        loginBox.style.display = 'block';
    }
});

// JavaScript to redirect to the login page
document.getElementById('login-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default link behavior

    // Redirect to the login page
    window.location.href = 'new.html';
});