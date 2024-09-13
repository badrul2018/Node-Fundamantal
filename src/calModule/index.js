function add(numOne, numTwo) {
 return numOne+numTwo
}
function sub(numOne, numTwo) {
    return numOne -numTwo;
}
exports.mul = (numOne, numTwo) => numOne* numTwo;
module.exports = {add, sub};