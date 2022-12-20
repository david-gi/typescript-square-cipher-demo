/// Apply multiple functions is succession
export function chain<T>(value: T, funArr: { (x: T): T }[]): T {
    switch (funArr.length) {
        case 0: throw "funArr cannot be empty"
        case 1: return funArr[0](value)
        default: return chain(funArr[0](value), funArr.slice(1))
    }
}