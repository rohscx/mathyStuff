module.exports = function (number) {
    const factors = number => [...Array(number + 1).keys()].filter(i=>number % i === 0);
    return factors(number);
}