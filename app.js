"use strict";
// for(let i = 0; i < 3; i++) {
//     setTimeout(()=> console.log(i));
// }
// let a = 10;
// console.log(`a = ${a}`)
//variables
let hello = "world";
const vasya = "Vasya";
const b = 10;
let c;
c = "10";
function getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}
//HW #30
function shiftCipher(str, shift = 1) {
    const minCharCode = "a".charCodeAt(0);
    const maxCharCode = "z".charCodeAt(0);
    const range = maxCharCode - minCharCode + 1;
    return Array.from(str).map((element) => {
        const charCode = element.charCodeAt(0);
        const correctShift = (charCode - minCharCode + shift) % range;
        if (charCode >= minCharCode && charCode <= maxCharCode) {
            element = String.fromCharCode(correctShift + minCharCode);
        }
        return element;
    }).join("");
    //TODO
    //for each lower case letter (a-z) you should 
    //perform code ASCII on a given shift (add)
    //shift should be in cycle of lower case letters
    // code ASCII 'z' + 2 = code ASCII 'b'
    //examples:
    //shiftCipher("abz.", 3) => "dec."
}
function shiftDecipher(str, shift = 1) {
    //TODO
    //for each lower case letter (a-z) you should 
    //perform code ASCII on a given shift (subtract)
    //shift should be in cycle of lower case letters
    // code ASCII 'z' - 2 = code ASCII 'x'
    //examples:
    //shiftCipher("dec.", 3) => "abz."
    const minCharCode = "a".charCodeAt(0);
    const maxCharCode = "z".charCodeAt(0);
    const range = maxCharCode - minCharCode + 1;
    return Array.from(str).map((element) => {
        const charCode = element.charCodeAt(0);
        const correctShift = (maxCharCode - charCode + shift) % range;
        if (charCode >= minCharCode && charCode <= maxCharCode) {
            element = String.fromCharCode(maxCharCode - correctShift);
        }
        return element;
    }).join("");
}
console.log(shiftCipher("abz.", 1000)); //"dec."
console.log(shiftDecipher("mnl.", 1000)); //"abz."
//# sourceMappingURL=app.js.map