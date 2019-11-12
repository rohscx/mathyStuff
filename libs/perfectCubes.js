module.exports = function (number = 20) {
    const perfectCubesArray = [...Array(number).keys()].map((d) => Math.pow(++d,3));
    const makeObject = (key, index) => {
        return {[index]: key};
    };
    const perfectCubeObject = perfectCubesArray.map((d, i) => makeObject(++i,d));
    return perfectCubeObject;
}