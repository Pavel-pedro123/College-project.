// we need a function to check the passwords matching

//eventually also show/hide passwords

// check database and check email usage (taken/not taken), report new user to database

// sha256 password encryption


const pwdMatchMarker = document.getElementById('pwd-check');
const passwordInput = document.getElementById('password-in');
const passwordCheck = document.getElementById('password-conf-in');

function checkPassword() {
    const pwd = passwordInput.value;
    const pwdCheck = passwordCheck.value;

    if ((pwd && pwdCheck && pwd === pwdCheck) && (pwd.length >= 5)) {
        pwdMatchMarker.classList.remove('fa-xmark');
        pwdMatchMarker.classList.add('fa-check');
        pwdMatchMarker.style.color = 'green';
    } else {
        pwdMatchMarker.classList.remove('fa-check');
        pwdMatchMarker.classList.add('fa-xmark');
        pwdMatchMarker.style.color = 'red';
    }
}

// Add event listeners for real-time checking
passwordInput.addEventListener('input', checkPassword);
passwordCheck.addEventListener('input', checkPassword);
