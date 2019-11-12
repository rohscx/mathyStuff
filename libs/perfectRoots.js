module.exports = function (number = 20, root = 2) {
    const perfectCubesArray = [...Array(number).keys()].map((d) => Math.pow(++d,root));
    const makeObject = (key, index) => {
        return {[index]: key};
    };
    const perfectCubeObject = perfectCubesArray.map((d, i) => makeObject(++i,d));
    return perfectCubeObject;
}