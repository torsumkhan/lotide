const eqArrays = function(arr1,arr2) {
    if(arr1.length != arr2.length) {
        return false;
    } else {
        for (let i = 0; i < arr1.length; i ++) {
          if(arr1[i] !== arr2[i]){
              return false
          }
        }
    return true;
    }
}

const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };


const middle = function(arr) {
    let returnArr = []
    
    if (arr.length  > 0 && arr.length < 3) {
        return [];
    } 
    else {
        if (arr.length % 2 == 0) {
            let theMiddle = Math.floor((arr.length -1)/2); //convert length to match the index and divide it by 2
            returnArr.push(arr[theMiddle], arr[theMiddle + 1]);
        } else {
            let theMiddle = Math.floor((arr.length-1)/2);
            returnArr.push(arr[theMiddle]);
        }

    }
    return returnArr;
}

// assertArraysEqual(middle([1,2,3]),[2]);

module.exports = middle