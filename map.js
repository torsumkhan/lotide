const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
    let result = [];
    for(let item of array) {
        result.push(callback(item));
    }

    return result;
}

const newFunc = word => word[0];
console.log(map(words,newFunc));