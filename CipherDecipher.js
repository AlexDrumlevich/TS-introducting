"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CipherDecipher = void 0;
class CipherDecipher {
    constructor(leastAsciiCode, mostAsciiCode, shift) {
        this.leastAsciiCode = leastAsciiCode;
        this.mostAsciiCode = mostAsciiCode;
        this.shift = shift;
        this.amountSymbols = mostAsciiCode - leastAsciiCode + 1;
    }
}
exports.CipherDecipher = CipherDecipher;
function cipher(input) {
    return Array.from(input).map(char => {
        const position = char.charCodeAt(0) - leastAsciiCode;
        const actualShift = (position + shift) % amountSymbols;
        return String.fromCharCode(leastAsciiCode + actualShift);
    }).join("");
}
function decipher(input) {
    return Array.from(input).map(char => {
        const position = mostAsciiCode - char.charCodeAt(0);
        const actualShift = (position + shift) % amountSymbols;
        return String.fromCharCode(mostAsciiCode - actualShift);
    }).join("");
}
//# sourceMappingURL=CipherDecipher.js.map