const findKeyByValue = function (object,value) {
    const findKeys = Object.keys(object);

    for (const key of findKeys) {      
        if (object[key] === value){
            return key
        }
    }
}
