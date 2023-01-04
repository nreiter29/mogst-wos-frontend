const toBusinessNumber = (number: number) => {
    const numberString: Array<string> = number.toString().split("").reverse()
    let result = ""
    for (let i = 0; i < numberString.length; i++) {
        if (i % 3 === 0 && i !== 0) {
            result += "."
        }
        result += numberString[i]
    }
    return +result.split("").reverse().join("")
}

export default toBusinessNumber