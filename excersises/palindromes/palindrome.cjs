function palindrome(str) {
    const strArr1 = str.split('')
    for (let index = 0; index < strArr1.length / 2; index++) {
        // const element = strArr1[index]; to check the index and value you may log this 
        if (strArr1[index] !== strArr1[strArr1.length - index - 1]) {
            return false
        }
    }
    return true
}

console.log(palindrome('10fe01'))
module.exports = palindrome