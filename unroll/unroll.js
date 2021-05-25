function unroll(squareArray) {
    let copy = squareArray.map(v => v)
    let result = []

    let n = squareArray.every((v) => v.length === squareArray.length)

    if (!n) throw new Error("Must be a square array.")

    if (squareArray.length === 1) return squareArray

    while (copy.length > 0) {
        result = result.concat(copy[0])
        copy.splice(0, 1)

        if (copy.length !== 0) {
            for (let i = 0; i < copy.length; i++) {
                result.push(copy[i][copy[i].length-1])
            }
            copy = copy.map((v) => {
                v.splice(v.length - 1, 1)
                return v
            })

            for (let i = copy[0].length - 1; i >= 0; i--) {
                result.push(copy[copy.length-1][i])
            }
            copy.splice(copy.length-1, 1)

            for (let i = copy.length - 1; i >= 0; i--) {
                result.push(copy[i][0])
            }
            copy = copy.map((v) => {
                v.splice(0, 1)
                return v
            })
        }

    }

    return result
}

module.exports = unroll;
