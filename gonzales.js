function validatePassword(password1, password2) {
    // check if passwords match
    if (password1 !== password2) {
        return false;
    }

    // check if password length is at least 8 characters
    if (password1.length < 8) {
        return false;
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
        return true;
    } else {
        return false;
    }
}

function reversePassword(password1, password2) {
    if (!validatePassword(password1, password2)) {
        return "Invalid Password!";
    }

    let reversedPassword = "";
    for (let i = password1.length - 1; i >= 0; i--) {
        reversedPassword += password1[i];
    }
    return reversedPassword;
}

function storePassword(name, password1, password2) {
    if (!validatePassword(password1, password2)) {
        return "Invalid Password!";
    }

    const reversedPassword = reversePassword(password1, password2);
    return { name: name, newpassword: reversedPassword };
}

// test cases
console.log(storePassword("John", "Pass1234", "Pass1234"));            // { name: "John", newpassword: "4321ssaP" }
console.log(storePassword("John", "pass1234", "pass1234"));            // "Invalid Password!"
console.log(storePassword("John", "pass1234", "pass1234567"));         // "Invalid Password!"
console.log(storePassword("John", "pass1", "pass1"));                  // "Invalid Password!"

// test cases
console.log(validatePassword("helloworld", "hello"));                   // return false
console.log(validatePassword("hello", "hello"));                        // return false
console.log(validatePassword("hello1234", "hello1234"));                // return false
console.log(validatePassword("Hello1234", "Hello1234"));                // return true
console.log(validatePassword("HELLO1234", "HELLO1234"));                // return false
