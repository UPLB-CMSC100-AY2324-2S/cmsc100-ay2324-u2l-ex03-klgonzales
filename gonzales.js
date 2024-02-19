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

    // loops through each charact in the pass
    for (let char of password1) {
        if (!isNaN(parseInt(char))) {               // check if charac is a number
            hasNumber = true;
        } else if (char === char.toUpperCase()) {   // check if charac is uppercase
            hasUpperCase = true;
        } else if (char === char.toLowerCase()) {   // check if charac is lowercase
            hasLowerCase = true;
        }
    }

    // checks if the password meets all the criteria
    if (hasNumber && hasUpperCase && hasLowerCase) {
        // pass is validj
        return true;
    } else {
        // pass is invalid
        return false;
    }
}

function reversePassword(password1, password2) {
    // validate before reversing
    if (!validatePassword(password1, password2)) {
        return "Invalid Password!";
    }

    // initialize an empty string to store the reversed pass
    let reversedPassword = "";
    // iterate through each charac of the pass starting from the end
    for (let i = password1.length - 1; i >= 0; i--) {
        // append the current character to the the reversed pass
        reversedPassword += password1[i];
    }
    // return the reversed pass
    return reversedPassword;
}

function storePassword(name, password1, password2) {
    // validate before storing
    if (!validatePassword(password1, password2)) {
        if (password1 !== password2) {
            return "Wrong Password!";
        } else if (password1.length < 8) {
            return "Insufficient Number of Characters!";
        } else {
            return "Invalid Password!";
        }
    }
    // reverse the valid password
    const reversedPassword = reversePassword(password1, password2);
    // return an object containing the username and reversed pass
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