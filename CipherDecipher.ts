
export class CipherDecipher {

    private amountSymbols: number

    constructor(private leastAsciiCode: number, private mostAsciiCode : number, private shift: number) {
        this.amountSymbols = mostAsciiCode - leastAsciiCode + 1
    }

    function cipher(input: string) : string {
        
       return Array.from(input).map(char => {
           const position = char.charCodeAt(0) - leastAsciiCode
           const actualShift = (position + shift) % amountSymbols
           return String.fromCharCode(leastAsciiCode + actualShift)
        }).join("")
    }

    function decipher(input: string) : string {
        
        return Array.from(input).map(char => {
            const position = mostAsciiCode - char.charCodeAt(0)
            const actualShift = (position + shift) % amountSymbols
            return String.fromCharCode(mostAsciiCode - actualShift)
         }).join("")
     }
}
