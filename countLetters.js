const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🙌 Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌ Asserion Failed: ${actual} !== ${expected}`);
    }
  };


  const countLetters = function (string) {
    const count = {}

    let array = string.split(' ').join('')

    for(char of array) {
            if(count[char]) {
                count[char] +=1
            } else {
                count[char] = 1
            }
    }
    return count
  }
