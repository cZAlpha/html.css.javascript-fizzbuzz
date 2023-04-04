class FizzBuzz {
    constructor(fizz, buzz) {
      this.fizz = fizz; 
      this.buzz = buzz;
    }

    isFizz(num) {
        // Turkey Operator
        // condition ? trueValue : falseValue;
        return num == 0 ? true : num % this.fizz == 0; 
    }

    isBuzz(num) {
        return num == 0 ? true : num % this.buzz == 0; 
    }

    isFizzBuzz(num) {
        return this.isFizz(num) && this.isBuzz(num); 
    }

    getOutput(num) {
        let returnStr = "";

        // Implicit and Explicit Method Calling Notes Below
        // General structure of method calling: ___ . ___
        // In other words: Implicit . methodName(Explicit) 
        // Basically means 
        // F(Implicit, Explicit), in math terms

        // Other important thing to note regarding method calling:
        // Unlike in Java, you MUST say "this" when referring to an implicit argument

        for (let i = 0; i <= num; i++) { // Stops at num
            if ( this.isFizzBuzz(i) ) {
                returnStr += "FizzBuzz ";
            } else if ( this.isFizz(i) ) {
                returnStr += "Fizz ";
            } else if ( this.isBuzz(i) ) {
                returnStr += "Buzz ";
            } else {
                returnStr += i + " ";
            }
        }

        returnStr.trim();
        return returnStr;
    }
  }
  