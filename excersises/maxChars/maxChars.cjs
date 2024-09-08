function maxChars(str) {
    const elements = str.split('')
    let stringObj = {}
    let max = 0
    let maxChar = ''
    for (const e of elements) {
        if (stringObj.hasOwnProperty(e)) {
            stringObj[e] += 1
        } else {
            stringObj[e] = 1
        }
    }
    for (const key in stringObj) {
        if (stringObj[key] > max) {
            max = stringObj[key]
            maxChar = key
        }
    }

    console.log({ max, maxChar }, 'sdjh')
    return maxChar
}

maxChars('himanshu sharma ')

module.exports = maxChars
