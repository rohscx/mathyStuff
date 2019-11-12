module.exports = function (a,b,D) {
    const x1 = `${(-1 * b)/(2*a)} +SQRT:${sqrt(D)}`;
    const x2 = `${(-1 * b)/(2*a)} -SQRT:${sqrt(D)}`;
    return {x1,x2,};
}