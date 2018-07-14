// (fname: string, …rest: string[]) => string;
// (fname: string = 'test', …rest: string[]) => string;

export const isActive = (match: any = false, location: any): boolean => {
    // if (!match) {
    //     return false
    // }

    return location.pathname === match.url
}

export const isUndefined = (x: any): boolean =>
    typeof (x) === 'undefined'

export const compare = (a1: Array<any>, a2: Array<any>): boolean =>
    a1.length === a2.length && a1.every((v, i) => v === a2[i])

export const isInt = (n: any): boolean =>
    Number(n) === n && n % 1 === 0

export const isFloat = (n: any): boolean =>
    Number(n) === n && n % 1 !== 0

export const isNull = (x: any): boolean =>
    typeof x === 'object' && x === null

export const isPhone = (phone: string): boolean =>
    phone.replace(/[a-zA-Z\s\-_)(+]+/mg, '').length === 11