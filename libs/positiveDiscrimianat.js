module.exports = function (a,b,D) {
    const x1 = (((-1 * b) + (sqrt(D)))/ (2*a));
    const x2 = ((-1 * b) - (sqrt(D)))/ (2*a);
    return {x1,x2,};
}