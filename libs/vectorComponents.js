

module.exports = function (A,theta,component = "A",fixed = 2) {
    const {TrigFunctions} = require('../app.js');
    x = new Number(A * new TrigFunctions(theta).cos).toFixed(fixed);
    y = new Number(A * new TrigFunctions(theta).sin).toFixed(fixed);
    return {[component+"x"]:x,[component+"y"]:y};
}