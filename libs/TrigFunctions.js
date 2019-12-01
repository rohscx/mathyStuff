module.exports = class {
    constructor(d) {
        this.degrees = d;
    }
    get sin() {
        return new Number(Math.sin(this.degrees * Math.PI/180));
    }
    get cos(){
        return new Number(Math.cos(this.degrees * Math.PI/180));
    }
    get tan(){
        return new Number(Math.tan(this.degrees * Math.PI/180));
    }
    get sec(){
        const cos = new Number(Math.cos(this.degrees * Math.PI/180));
        return new Number(1/cos);
    }
    get csc(){
        const csc = new Number(Math.sin(this.degrees * Math.PI/180));
        return new Number(1/csc);
    }
    get aSin(){
        return new Number(Math.asin(this.degrees) * 180/Math.PI);
    }
    get aCos(){
        return new Number(Math.acos(this.degrees) * 180/Math.PI);
    }
    get aTan(){
        return new Number(Math.atan(this.degrees) * 180/Math.PI);
    }
}