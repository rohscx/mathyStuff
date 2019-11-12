module.exports = function (number = 20) {
    const perfectSquaresArray = [...Array(number).keys()].map((d) => ++d * d);//[1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361];
    const makeObject = (key, index) => {
        return {[index]: key};
    };
    const perfectSquaresObject = perfectSquaresArray.map((d, i) => makeObject(++i,d));
    return perfectSquaresObject;
}