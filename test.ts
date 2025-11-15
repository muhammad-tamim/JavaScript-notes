const taka = (input: unknown) => {
    if (typeof input === "number") {
        console.log(input)
    }
    else if (typeof input === "string") {
        console.log(parseInt(input))
    }
    else {
        console.log("please add a valid input")
    }
}

taka(100) // 100
taka("100") // 100
taka(null) // please add a valid input