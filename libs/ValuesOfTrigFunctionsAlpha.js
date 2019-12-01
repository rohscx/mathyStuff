const fraction = require('fractional').Fraction;
const squareRootSimpifier = require('./squareRootSimpifier.js');

const {sqrt,pow} = Math;

module.exports = class {  
    // tech Math section 8.1 signs of the Trig Functions. In this case the question asks for Alpha NOT Theta  

        constructor(x, y, tan,place = 3) {
            this.x = x;
            this.y = y;
            this.r = tan? new Number(Math.sqrt(1+Math.pow(tan,2))).toFixed(place) : Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
        }
        get sin() {
            const x = this.x;
            const y = this.y;
            const r = Math.pow(x,2) + Math.pow(y,2);
            return {y, r:squareRootSimpifier(r)};
        }
        get cos(){
            const x = this.x;
            const y = this.y;
            const r = Math.pow(x,2) + Math.pow(y,2);
            return {x, r:squareRootSimpifier(r)};
        }
        get tan(){
            const x = this.x;
            const y = this.y;
            const r = Math.pow(x,2) + Math.pow(y,2);
            return {y, x};
        }
        get csc(){
            const x = this.x;
            const y = this.y;
            const r = Math.pow(x,2) + Math.pow(y,2);
            return {r:squareRootSimpifier(r),y};
        }
        get sec(){
            const x = this.x;
            const y = this.y;
            const r = Math.pow(x,2) + Math.pow(y,2);
            return {r:squareRootSimpifier(r),x};
        }
        get cot(){
            const x = this.x;
            const y = this.y;
            const r = Math.pow(x,2) + Math.pow(y,2);
            return {x,y};
        }

        get allFunctions (){
            const sin = this.sin;
            const cos = this.cos;
            const tan = this.tan;
            const csc = this.csc;
            const sec = this.sec;
            const cot = this.cot;
            return {sin,cos,tan,csc,sec,cot}
        }
        set setR(value) {
            // an overid to set r as tan
            this.r = new Number(sqrt(1+pow(value,2))).toFixed(3);;
          } 
    }