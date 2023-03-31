function ABCheck(str) {
    // code goes here
    strArr = str.toLowerCase();

    console.log(strArr);

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === 'a') {
            if (strArr[i + 4] === 'b') {
                return true;
            }
        } else if (strArr[i] === 'b') {
            if (strArr[i + 4] === 'a') {
                return true;
            }
        }
    }

    return false;
}
let output = ABCheck('aMAJ7sBrO4CyysuoHFrgGTX');
console.log(output);