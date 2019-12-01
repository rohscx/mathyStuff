module.exports = function (degrees, presision = 2){
    // for converting degrees to radians
    // (180/x)/(Pi) 
    const {PI} = Math;
    const convert = (PI/(180/degrees));
    const asNumber = new Number(convert).toFixed(presision);
    
    return (asNumber);
}