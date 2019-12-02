

module.exports = function (a,b,fixed = 2) {
    const {TrigFunctions} = require('../app.js');
    R = new Number(Math.sqrt(Math.pow(a,2) + Math.pow(b,2))).toFixed(fixed);
    Theta = new Number(new TrigFunctions(b/a).aTan).toFixed(fixed);
    return {R,Theta};
}