// To take the user input import the readline module
const readline = require('readline');

// Assign letter to specific number
function letter_to_number(letter) {
    // Get the ASCII for A
    a = 'A'.charCodeAt(0);

    // Get the ASCII for the input letter
    b = letter.charCodeAt(0);

    // Calculate the differece to get 0 to 25 range
    calc = b - a
    return calc;
}

// Convert number (0 to 25) back to uppercase letter
function number_to_letter(number) {
    // Get the ASCII code for 'A'
    a = 'A'.charCodeAt(0);

    // Add number to ASCII of 'A' to get target letter
    c = (number % 26) + a;

    // Convert ASCII back to letter
    return String.fromCharCode(c);
}

// Encryption function
function Encryption(plaintext, key) {

    // Get the key by making the length same as plaintext
    key = key.substring(0, plaintext.length);

    // Empty string to store the cipher text
    let cipher = '';

    // Loop through each letter in the plaintext
    for (let i = 0; i < plaintext.length; i++) {

      // Convert letter to number, Add plaintext and key numbers, then mod 26 to get the remainder. 
      // Convert result back to letter and add to cipher
      cipher += number_to_letter((letter_to_number(plaintext[i]) + letter_to_number(key[i])) % 26);
    }

    // Final cipher text
    return cipher;
}

// Prompt function
function prompt() {
    // Provide a user interface for writing output and reading input
    const rl = readline.createInterface({
        input: process.stdin, // input from keyboard
        output: process.stdout // output on screen
    });

    // Question to ask the user for input
    rl.question('Enter the plaintext: ', (plaintext) => {

        // If the user key in lowercase, number of symbols
        if (!/^[A-Z]+$/.test(plaintext)) {
          // Error message for user
          console.log("Error: No lowercase, numbers, or symbols allowed.\n");
        
          // Close after printing the console log statement to ensure the output is not doubled or trippled
          rl.close();

          // Repeat the function to prompt the user again
          prompt();

          return;
        }

    // Nested function to ask the key again if it is invalid
        function Key_again() {
          // Question to ask the user to input the key
          // THISISANEXAMPLEKEYINCOMPUTERSECURITYEXAM
          rl.question('Enter the key (uppercase letters only): ', (key) => {
            // If the user key in lowercase, number or symbols
            if (!/^[A-Z]+$/.test(key)) {
              // Error message for user
              console.log("Error: No lowercase, numbers, or symbols allowed in key.\n");
              // Recurssive function to ask the user to input the key again until the valid one appears
              Key_again();
              return;
            }

            // Encrypt the user input
            const ciphertext = Encryption(plaintext, key);

            // Output Console log statements
            console.log("---------------------------------")
            console.log("            Output")
            console.log("---------------------------------")
            console.log("Plaintext:   ", plaintext); // Plaintext
            console.log("Key:         ", key.substring(0, plaintext.length)); // Key
            console.log("Cipher text: ", ciphertext); // cipher text
            console.log("\n")

            // Detailed output console log statements
            console.log("---------------------------------------------------------------")
            console.log("                      Detailed Output")
            console.log("---------------------------------------------------------------")
            // Print letter with number for plain text
            console.log("Plaintext:   ", plaintext.split('').map(c => `${c} (${letter_to_number(c)})`).join(' '));
            // Print letter with number for key
            console.log("Key:         ", key.substring(0, plaintext.length).split('').map(c => `${c} (${letter_to_number(c)})`).join(' '));
            // Print letter with number for cipher text
            console.log("Cipher text: ", ciphertext.split('').map(c => `${c} (${letter_to_number(c)})`).join(' '));

            rl.close();
          });
        }
      Key_again();
    });
}

// Prompt function for the user
prompt();

