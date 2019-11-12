module.exports = function (r) {
    const result = new Number(((r * 180) / Math.PI)) ;
    return result.toFixed(2);    
}