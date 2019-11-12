module.exports = class {
    constructor(placeValue) {
        this.placeValue = new Number(+placeValue);
      }
      sEp (integer, power=1) {
        const resolveExponent = Math.pow(+integer,+power);
        const resolveFix = resolveExponent.toFixed(this.places);
        const castNumber = + resolveFix
        //console.log(resolveExponent,resolveFix,castNumber);
        return castNumber;
    };
    // Solve Exponent Places ( sEP )

    
}