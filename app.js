/* This is a small algorith written in Javascript with the purpose to change 
each character of a string with the next character in the alphabet.

Example:
For string: 'abcdz'
Expected result is: 'bcdea' */


/*Declaring the function as module exports to be used in a test file.
Function has two parameters: 
- stringBitso, (string to convert) 
- alphabet, which contains the entire alphabet to get the next char for each character in string*/

module.exports = function(stringBitso, alphabet) {
    
    //Initializing temporary variable that will be returned by the function when loop is finished
    let newString = ""

    //Initialize a for loop to loop through each character of the iterable string
    for (let char of stringBitso) {
    
        //In order to avoid errors, we need an if condition to only do the action if the character is part of the alphabet
        if (alphabet.includes(char)) {

            /*Since the last character in alphabet is 'z', we cant get a char with index of z + 1, 
            so we return to get the char at index 0 in alphabet
            and add it to the final result*/
            if (char === 'z') {
                newString += alphabet.charAt(0)    
            }

            /*For other cases, we just take the character in alphabet from the next index value 
            compared to the char validated and add it to the final result*/
            else {
                newString += alphabet.charAt(alphabet.indexOf(char) + 1)
            }
        }
    }

    //Function will return the newString value after finishing the loop through all the chars in string
    return newString

}