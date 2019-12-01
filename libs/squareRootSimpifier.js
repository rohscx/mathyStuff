module.exports = function (x,y) {
    // Janky square root simplyfier
    // for Janky as question Assume that ax (alphaα) is an angle in statard postion whose termila side contains the point (8,8). 
    // Find the exact values of the following functions.
    const aSquared = x;
    const bSquared = y; 
    const p = Math.pow(aSquared,2) + Math.pow(bSquared,2)
    const unBallFunction = (number) => {
        outside_root = 1
        inside_root = number
        d = 2
        while (d * d <= inside_root){
            if (inside_root % (d * d) == 0){
                inside_root = inside_root / (d * d)
                outside_root = outside_root * d
              }
              else {
                d = d + 1
        
              }
        }
    return [outside_root,inside_root]
    }
    const recusivesDevide = (p,b) => {
        const remainder = p % b;
        const devide = p / b;
        if (remainder == 0) {
            return recusivesDevide(devide,b)
        } else {
            return {n:b,root:remainder}
        }
    };
    if (y === undefined) {
        const [n,root] = unBallFunction(x);
        return {n,root};
    } else {
        return recusivesDevide(p,bSquared);
    }
}