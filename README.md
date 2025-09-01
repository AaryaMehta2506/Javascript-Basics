# Javascript-Basics
This project demonstrates basic concepts of **variable declaration** and **scope** in JavaScript using `const`, `let`, and `var`.

## 📂 File Overview

-   **test.js**\
    Contains simple examples to understand:
    -   `const` (constants that cannot be reassigned).
    -   `let` (block-scoped variables, preferred for mutable values).
    -   `var` (function-scoped variables, generally avoided).
    -   Implicit variable declaration (not recommended).
    -   Undefined variables.

## ▶️ How to Run

1.  Ensure you have **Node.js** installed.

2.  Run the file in your terminal:

    ``` bash
    node test.js
    ```

## 📖 Code Explanation

-   `const accountID = 144553`\
    Creates a constant variable that cannot be reassigned.

-   `let accountEmail = "aarya@google.com"`\
    A mutable variable. Later updated to `"abc@yahoo.com"`.

-   `var accountPassword = "12345"`\
    Demonstrates `var`. Later updated to `"88888"`.\
    ⚠️ Not recommended due to block/function scope issues.

-   `accountCity = "Jaipur"`\
    An implicitly declared variable (avoided in best practices). Later
    updated to `"Vadodara"`.

-   `let accountState;`\
    Declared but not initialized → outputs `undefined`.

-   Final `console.log([...])` shows updated values.

## ✅ Example Output

``` bash
[ 144553, 'abc@yahoo.com', '88888', 'Vadodara', undefined ]
```

## 🚀 Learning Points

-   Use **`const`** for values that should not change.
-   Use **`let`** for variables that may change.
-   Avoid **`var`** due to scoping issues.
-   Always declare variables before use.

## 🤝 Contributing
Contributions are welcome!
Feel free to fork the repository, improve the game, and open a pull request. Let's grow this classic game together!

## 📄 License
This project is licensed under the [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

## 👩‍💻 Author
**Aarya Mehta**  
🔗 [GitHub Profile](https://github.com/AaryaMehta2506)
