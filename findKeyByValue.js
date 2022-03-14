const findKeyByValue = function (object,value) {
    const findKeys = Object.keys(object);

    for (const key of findKeys) {      
        if (object[key] === value){
            console.log(object[key])
            return key
        }
    }
}
