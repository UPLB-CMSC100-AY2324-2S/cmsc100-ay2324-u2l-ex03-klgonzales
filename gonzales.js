const password1 = "Password1";
const password2 = "Password1";
const username = "Sam";

function validatePassword(password1, password2) {
    // check if passwords match
    if (password1 !== password2) {
        return { valid: false };
    }

    // check if password length is at least 8 characters
    if (password1.length < 8) {
        return { valid: false };
    }

    // check if password contains at least 1 number, 1 uppercase character, and 1 lowercase character
    let hasNumber = false;
    let hasUpperCase = false;
    let hasLowerCase = false;

    for (let char of password1) {
        if (!isNaN(parseInt(char))) {
            hasNumber = true;
        } else if (char === char.toUpperCase()) {
            hasUpperCase = true;
        } else if (char === char.toLowerCase()) {
            hasLowerCase = true;
        }
    }

    if (hasNumber && hasUpperCase && hasLowerCase) {
        return { valid: true, username: username };
    } else {
        return { valid: false };
    }
}

// test cases
console.log(validatePassword(password1, password2));  // { valid: true, username: 'Sam' }
console.log(validatePassword("hello", "hello"));      // { valid: false }
