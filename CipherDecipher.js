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
    cipher(input) {
        return this.cipheringDeciphering(input, this.mapperCipher);
    }
    decipher(input) {
        return this.cipheringDeciphering(input, this.mapperDecipher);
    }
    cipheringDeciphering(str, mapper) {
        const arStr = Array.from(str);
        const arRes = arStr.map(symb => {
            let res = symb;
            if (symb.charCodeAt(0) <= this.leastAsciiCode && symb.charCodeAt(0) >=
                this.leastAsciiCode) {
                res = mapper.call(this, symb);
            }
            return res;
        });
        return arRes.join('');
    }
    mapperCipher(symb) {
        const actualShift = (symb.charCodeAt(0) - this.leastAsciiCode
            + this.shift) % this.amountSymbols;
        return String.fromCharCode(this.leastAsciiCode + actualShift);
    }
    mapperDecipher(symb) {
        const actualShift = (this.mostAsciiCode - symb.charCodeAt(0) + this.shift)
            % this.amountSymbols;
        return String.fromCharCode(this.mostAsciiCode - actualShift);
    }
}
exports.CipherDecipher = CipherDecipher;
//# sourceMappingURL=CipherDecipher.js.map