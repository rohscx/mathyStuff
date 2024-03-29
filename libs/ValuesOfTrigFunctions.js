const fraction = require('fractional').Fraction;

const {sqrt,pow} = Math;

module.exports = class {  
    // tech Math section 4.2 Defining Trig Functions  
    // Find values of the trigonometric functions of the angle (in standard position) whose terminal side passes through the given point.
    // when the factions are returned as large fractions, make the reult a decimal. n/d
    // set the tan option if something squrley e.g. "Find the values of the indicated.." questions 
        constructor(x, y, tan,place = 3) {
            this.x = x;
            this.y = y;
            this.r = tan? new Number(Math.sqrt(1+Math.pow(tan,2))).toFixed(place) : Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
        }
        get sin() {
            try {
                return new fraction(this.y,this.r);
            } catch (error) {
                return this.y / this.r;
            };
        }
        get cos(){
            try {
                return new fraction(this.x,this.r);
            } catch (error) {
                return this.x / this.r;
            };
        }
        get tan(){
            try {
                return new fraction(this.y,this.x);
            } catch (error) {
                return this.y / this.x;
            };
        }
        get csc(){
            try {
                return new fraction(this.r,this.y);
            } catch (error) {
                return this.r / this.y;
            };
        }
        get sec(){
            try {
                return new fraction(this.r,this.x);
            } catch (error) {
                return this.r / this.x;
            };
        }
        get cot(){
            try {
                return new fraction(this.x,this.y);
            } catch (error) {
                return this.x / this.y;
            };
        }
        set setR(value) {
            // an overid to set r as tan
            this.r = new Number(sqrt(1+pow(value,2))).toFixed(3);;
          } 
    }