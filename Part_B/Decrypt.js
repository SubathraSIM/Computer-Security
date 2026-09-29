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

function decrypt(ciphertext, key) {
  // Get the key by making the length same as ciphertext
  key = key.substring(0, ciphertext.length);
  
  // Empty string to store the plain text
  let plaintext = '';

  // Loop through each letter in the ciphertext
  for (let i = 0; i < ciphertext.length; i++) {
    
    // Convert cipher letter and key letter to numbers, subtract key from cipher, add 26 to avoid negative values, then mod 26
    plaintext += number_to_letter((letter_to_number(ciphertext[i]) - letter_to_number(key[i]) + 26) % 26);
  }

  return plaintext;
}

function prompt() {
  // Provide a user interface for writing output and reading input
  const rl = readline.createInterface({
    input: process.stdin, // input from keyboard
    output: process.stdout // output on screen
  });

  // Question to ask the user for input
  rl.question('Enter the ciphertext: ', (ciphertext) => {

    // If the user key in lowercase, number or symbols
    if (!/^[A-Z]+$/.test(ciphertext)) {
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
      // "THISISANEXAMPLEKEYINCOMPUTERSECURITYEXAM"
      rl.question('Enter the key (uppercase letters only): ', (key) => {
        // If the user key in lowercase, number or symbols
        if (!/^[A-Z]+$/.test(key)) {
          // Error message for user
          console.log("Error: No lowercase, numbers, or symbols allowed in key.\n");
          // Recurssive function to ask the user to input the key again until the valid one appears
          Key_again();
          return;
    }
      
        // Decrypt the input
        const plaintext = decrypt(ciphertext, key);

        // Output Console log statements
        console.log("---------------------------------")
        console.log("            Decryption")
        console.log("---------------------------------")
        console.log("Cipher text:", ciphertext); // ciphertext
        console.log("Key       :", key.substring(0, ciphertext.length)); // Key
        console.log("Plain text :", plaintext); // plaintext

        // Close the prompt
        rl.close();
    });
  }
  Key_again();
});
}

// Prompt function for the user
prompt();