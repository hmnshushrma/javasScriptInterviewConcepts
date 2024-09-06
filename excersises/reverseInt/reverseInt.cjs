function reverseInt(n) {
    const stringInt = n.toString()
    return parseInt(stringInt.split('').toReversed().join('')) * Math.sign(n)
}
console.log(reverseInt(0))
module.exports = reverseInt