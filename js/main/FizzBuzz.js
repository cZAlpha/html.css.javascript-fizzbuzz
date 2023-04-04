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

        if ( this.isFizzBuzz(num) ) {
            returnStr = "FizzBuzz";
        } else if ( isFizz(num) ) {
            returnStr = "Fizz";
        } else if ( isBuzz(num) ) {
            returnStr = "Buzz";
        } else {
            returnStr = num;
        }

        return returnStr;
    }
  }
  