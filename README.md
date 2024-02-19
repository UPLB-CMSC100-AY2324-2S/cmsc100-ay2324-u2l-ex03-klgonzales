# Exercise 03: JavaScript Basics part 1

Title: Simulate a password validation program in JavaScript
Type: Individual Assessment
Score: (15 points)

## Functions

### 1. validatePassword(password1, password2)

This function validates passwords based on specific criteria:
- Both passwords must match.
- The password must have at least 8 characters.
- The password must contain at least 1 number, 1 uppercase letter, and 1 lowercase letter.

**Parameters:**
- `password1` (string): The first password to compare.
- `password2` (string): The second password to compare.

**Returns:**
- `true` if the password is valid; otherwise, `false`.

### 2. reversePassword(password)

This function reverses a given password string.

**Parameters:**
- `password` (string): The password to reverse.

**Returns:**
- The reversed password string.

### 3. storePassword(name, password1, password2)

This function stores a reversed password along with the username if the password is valid.

**Parameters:**
- `name` (string): The username.
- `password1` (string): The first password to store and reverse.
- `password2` (string): The second password to validate before storing and reversing.

**Returns:**
- An object containing the username and reversed password if the password is valid; otherwise, a prompt indicating the reason for invalidity.