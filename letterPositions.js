const letterPositions = function (string) {
    let count = {}
    let array = string.split('')

    for(let i = 0; i <array.length ; i ++){
        console.log(array[i])

        if(array[i] !== " ") {
            if(count[array[i]]){ 
                count[array[i]].push(i); 
            } else {
                count[array[i]] = [i];

            }
            }
        }

        
        return count;
    }



