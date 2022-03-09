const middle = function(arr) {
    let returnArr = []
    
    if (arr.length  > 0 && arr.length < 3) {
        return [];
    } 
    else {
        if (arr.length % 2 == 0) {
            let theMiddle = Math.floor((arr.length -1)/2);
            returnArr.push(arr[theMiddle], arr[theMiddle + 1]);
        } else {
            let theMiddle = Math.floor((arr.length-1)/2);
            returnArr.push(arr[theMiddle]);
        }

    }
    return returnArr;
}


