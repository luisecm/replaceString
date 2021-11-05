/* Declaring constants for assertion used by chai, module including the function to test, 
alphabet used to validate the function and initializing empty variable for each of the values to test*/
const expect = require('chai').expect;
const app = require('../app');
const alphabet = "abcdefghijklmnopqrstuvwxyz"
let stringBitso = ''

//Creating a test suite with Mocha
describe('String Replaces tests', function() {

    //Creating a test scenario needed to validate the function
    it('Validate that string with all chars in alphabet is returned as expected', function() {
        
        //Assigning value to test to stringBitso variable
        stringBitso = "abcdz"

        /*Using expect assertion from mocha to validate actual value from stringBitso variable 
        is equal to expected value according to test scenario*/
        expect(app(stringBitso, alphabet)).to.equal('bcdea')
    })

    //Repeating the same steps as previous test scenario with different validations
    it('Validate that if all chars in string are in alphabet, then the string returned has the same length as original string', function() {
        stringBitso = "abcdz"
        expect(app(stringBitso, alphabet)).to.have.length(stringBitso.length)
    })

    it('Validate that if any char in string is not in alphanet, then only chars in alphabet are converted', function() {
        stringBitso = "ab3d1"
        expect(app(stringBitso, alphabet)).to.equal('bce')
    })

    it('Validate that if string is empty then returned string is empty', function() {
        stringBitso = ""
        expect(app(stringBitso, alphabet)).to.equal('')
    })

    it('Validate that string without chars in alphabet is returned as empty string', function() {
        let stringBitso = "12345"
        expect(app(stringBitso, alphabet)).to.equal('')
    })

})