// Caesar cipher
// In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

// The transformation can be represented by aligning two alphabets; the cipher alphabet is the plain alphabet rotated left or right by some number of positions. For instance, here is a Caesar cipher using a left rotation of three places, equivalent to a right shift of 23 (the shift parameter is used as the key):

const caesarCipher = (str) => {
  return str.split('').map((letter, i) => {
    let ascii = str.charCodeAt(i);
    if (ascii === 32) {
      return letter;
    };
    return ascii >= 68 ? String.fromCharCode(ascii - 3) : String.fromCharCode(ascii + 23);
  }).join('');
};