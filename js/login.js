

// login form for banking
document.getElementById('button-click').addEventListener('click', function(){
    

    // get user email
    const emailField = document.getElementById('email-input');
    const emailInput = emailField.value;


    // get user password 
    const passwordField = document.getElementById('password-input');
    const passwordInput = passwordField.value;

    // check email and password

    if(emailInput == 'abdullahsuhail43@gmail.com' && passwordInput == 'secret'){
        window.location.href = 'bank-site.html';
    }
})