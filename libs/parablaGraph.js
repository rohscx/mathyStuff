module.exports = function (x, callBack){
    /*
    x is an arry of at least 3 points
    callBack is the yFunction
    example: const yFunction = (d) => {
        return ( ( pow(d,2) -4) );
    }
    */
    return x.map((d) => ({x:d ,y: callBack(d)}));
};