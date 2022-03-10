const eqObjects = function (ob1,ob2) {
    const keyOfObj1 = Object.keys(ob1);
    const keyOfObj2 = Object.keys(ob2);


    if (keyOfObj1.length !== keyOfObj2.length){
        // console.log("diff length");
        return false;
    } else {
        for (const key of keyOfObj1) {
            if (Array.isArray(ob1[key])) {
                return eqArrays(ob1[key],ob2[key]);

            } else if (ob1[key] !== ob2[key]){
                return false;
                
            }
        }

    }
    return true;
};

const assertObjectsEqual = function(actual,expected) {
    const inspect = require('util').inspect;

    if (eqObjects(actual,expected)) {
        console.log(`🙌 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
      } else {
        console.log(`❌ Asserion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
      }
}

assertObjectsEqual({ a: '1', b: 2 },{ c: 2, a: '1' })
