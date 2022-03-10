function eqArrays(arr1,arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    } else {
        for (let i = 0; i < arr1.length; i ++) {
          if(arr1[i] !== arr2[i]){
              return false;
          }
          
        }
    return true;
    }
}

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

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2));