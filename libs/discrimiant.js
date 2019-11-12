module.exports = function (a,b,c){
    //for quadratic formula 
    const D = (Math.pow(b,2)) - (4*a*c);
    if (D < 0) {
        return {D,descriminant:'equation has no real solution (root), but has two distinct imaginary roots.'};
    } else if (D === 0) {
        return {D,descriminant:'equation has one real solution'};
    } else {
        return {D,descriminant:'equation has two distinct real roots'};
    }
}