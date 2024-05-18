function processArray(arr){ 
    const newArr = []
    for (const num of arr) { 
        if (num % 2 === 0) {
            newArr.push(num*num);
        } else {
            newArr.push(num * 3);
          
        }
    }
    return newArr;
}