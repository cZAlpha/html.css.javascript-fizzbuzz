class IsFizzBuzzTest {
    constructor() {
      this.fb = new FizzBuzz(3, 5);
    }
    test() {
        this.testPositiveFizzBuzz();    
        this.testNegativeFizzBuzz();
        this.testEdgeCaseFizzBuzz();
    }
  
    testPositiveFizzBuzz() {
      test(true, this.fb, this.fb.isFizzBuzz, 15);
    }
  
    testNegativeFizzBuzz() {
      test(false, this.fb, this.fb.isFizzBuzz, 16);
    }
  
    testEdgeCaseFizzBuzz() {
      test(true, this.fb, this.fb.isFizzBuzz, 0);
    }
  }
  