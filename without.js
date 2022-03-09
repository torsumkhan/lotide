const eqArrays = function(ar1,ar2) {
    if(ar1.length !== ar2.length) {
        return false;
    } else {
        for (let i = 0; i < ar1.length; i ++) {
          if(ar1[i] !== ar2[i]){
              return false
          }
        }
      return true;
    }
}



const without = function (source,itemsToRemove) {

    let newArray = [];
    console.log(source, itemsToRemove);

    for(i = 0; i < source.length; i ++) {
        console.log(source[i])


        //check to see if it is in itemstoremove
        console.log("boolean check ", !itemsToRemove.includes(source[i]));
        if(!itemsToRemove.includes(source[i])) {
            console.log("check")
            newArray.push(source[i])

        }

    }
    console.log(newArray)

}

const assertArraysEqual = function(arr1,arr2){
    if (eqArrays(arr1,arr2) === true) {
        console.log(`🙌 Assertion Passed: ${arr1} === ${arr2}`);
      } else {
        console.log(`❌ Asserion Failed: ${arr1} !== ${arr2}`);
      }
}



assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);