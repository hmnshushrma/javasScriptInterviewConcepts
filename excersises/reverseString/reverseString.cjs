function reverString(str) {
    let reversed = ''
    const strArr = str.split('')

    // using # for loop #
    const reverseArr = []
    for (let index = strArr.length - 1; index >= 0; index--) {
        reverseArr.push(strArr[index])
    }
    return reverseArr.join('')

    // // using # for each #
    // strArr.forEach(element => {
    //     reversed = element + reversed
    // });
    // return reversed

    // using # for of # 
    // for (const element of strArr) {
    //     reversed = element + reversed
    // }
    // return reversed

    // using with do while 
    // let i = 0
    // do {
    //     reversed = strArr[i] + reversed
    //     i++
    // } while (i < str.length)
    // return reversed

    // using with whle loop
    // let i = 0
    // while (i < str.length) {
    //     reversed = strArr[i] + reversed
    //     i++
    // }
    // return reversed

    // using map 
    // strArr.map((item) => {
    //     reversed = item + reversed
    // })
    // return reversed

    //    using reduce 
    // const reversedStr = strArr.reduce((rev, char) => {
    //     return char + rev
    // }, '')
    // return reversedStr
}
console.log(reverString('Greetings!'))
module.exports = reverString
