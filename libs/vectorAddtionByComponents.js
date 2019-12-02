

module.exports = function (Ax,Ay,Bx,By,quadrant = 180,fixed = 2) {
    const {TrigFunctions} = require('../app.js');
    const {sqrt,pow} = Math;
    const Rx = (Ax * new TrigFunctions(Ay).cos)  + (Bx * new TrigFunctions(By).cos);
    const Ry = (Ax * new TrigFunctions(Ay).sin)  + (Bx * new TrigFunctions(By).sin);
    const R = sqrt(pow(Rx,2) + pow(Ry,2)).toFixed(fixed);
    const Theta = quadrant + +(new TrigFunctions(Ry/Rx).aTan.toFixed(fixed))
    return {R,Theta};
}