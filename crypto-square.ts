import { chain } from './utils'

export default class Crypto {
    private readonly _plaintext: string
    private readonly _size: number

    constructor(plaintext: string) {
        this._plaintext = plaintext
        this._size = this.size()
    }

    //#region private functions

    private chunk = (val: string, res: string[] = []): string[] => {
        if (val.length == 0) return res
        else if (val.length <= this._size) return res.concat([val])
        else return this.chunk(val.slice(this._size), res.concat([val.slice(0, this._size)]))
    }

    private rotate = (matrix: string[]): string[] => matrix
        .map(x => x.split(""))
        .reduce((a, b) => a.map((str, i) => str + (b[i] ?? "")))

    //#endregion

    size = (): number => this._size ?? chain(this.normalizePlaintext().length, [Math.sqrt, Math.ceil])

    normalizePlaintext = (): string => this._plaintext
        .replace(/[.,/#!$%^&*;:{}=\-_`~()\s]/g, "")
        .toLowerCase()

    plaintextSegments = (): string[] => this.chunk(this.normalizePlaintext())

    cipherSegments = (): string[] => this.rotate(this.plaintextSegments())

    ciphertext = (): string => this.cipherSegments().reduce((a, b) => a + (b ?? ""))

    cipher = (): string => "\n" +
        this.cipherSegments()
            .map((x, i, a) => (a.length == (i + 1)) ? x.padEnd(this._size, " ") : x)
            .reduce((a, b) => a + "\n" + b)
}