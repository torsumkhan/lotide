function head(array) {
    return array[0];
}


const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🙌 Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌ Asserion Failed: ${actual} !== ${expected}`);
    }
  };



