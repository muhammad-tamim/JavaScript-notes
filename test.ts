

let anything: any;

anything = 22.000;

(anything as number).toFixed(1)

const taka = (input: number | string): number | string | undefined => {
    if (typeof input === "number") {
        return input
    }
    else if (typeof input === "string") {
        return parseInt(input)
    }
}

const result1 = taka(100) as number
const result2 = taka('100') as number
console.log(result1, result1) // 100 100