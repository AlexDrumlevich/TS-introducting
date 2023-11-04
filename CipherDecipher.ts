
export class CipherDecipher {

    private amountSymbols: number

    constructor(private leastAsciiCode: number, private mostAsciiCode : number, private shift: number) {
        this.amountSymbols = mostAsciiCode - leastAsciiCode + 1
    }

    cipher(input: string) : string {
        return this.cipheringDeciphering(input, this.mapperCipher)
    }

    decipher(input: string) : string {
        return this.cipheringDeciphering(input, this.mapperDecipher)
     }


    private cipheringDeciphering(str: string, 
        mapper: (symb: string) => string) : string {
        const arStr: Array<string> = Array.from(str);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb.charCodeAt(0) <= this.leastAsciiCode && symb.charCodeAt(0) >=
             this.leastAsciiCode) {
                res = mapper.call(this, symb);
            }
            return res;
        })
      
        return arRes.join('');
    }
    
    private mapperCipher(symb: string): string{
        const actualShift: number = (symb.charCodeAt(0) - this.leastAsciiCode
         + this.shift) % this.amountSymbols;
        return String.fromCharCode(this.leastAsciiCode + actualShift);
    }
    private mapperDecipher(symb: string): string{
        const actualShift: number = (this.mostAsciiCode - symb.charCodeAt(0) + this.shift)
         % this.amountSymbols;
        return String.fromCharCode(this.mostAsciiCode - actualShift);
    }
}

