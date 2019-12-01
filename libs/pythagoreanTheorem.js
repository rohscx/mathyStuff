module.exports = function (x,y){
    // take the Square Root of a^2 + b^2 = c
    const aSquared = Math.pow(x,2);
    const bSquared = Math.pow(y,2);
    const cSquared = Math.sqrt(( aSquared + bSquared))
    // convert cSqured to Number type and round to the 4 decimal place
    const r = Number(cSquared).toFixed(4);
    return r;
}
