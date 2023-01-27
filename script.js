const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input,message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}

function validateEmail(input) {
  var re = /\S+@\S+\.\S+/;
    if (re.test(input.value)) {
        success(input);
    } else {
        error(input, 'unexpected email adress');
    }
}

function checkRequired(inputs) {
    inputs.forEach(function (input) { 
        if (input.value === '') {
            error(input, `${input.id} is required`);
        } else {
            success(input);
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `en az ${min} karakter olmalı`);
    } else if (input.value.length > max) {
        error(input, `en fazla ${max} karakter olmalı`);
    } else {
        success(input);
    }
}

function checkPasswords(input1, input2) {
    if (input1.value != input2.value) {
        error(input2, 'passwords are not same');
    } else {
        success();
    }
}

form.addEventListener('submit', function (e) { 
    e.preventDefault();
    checkRequired([username, email, password, repassword]);
    validateEmail(email);
    checkLength(username, 7, 15);
    checkLength(password, 7, 12);
    checkPasswords(password , repassword);
});