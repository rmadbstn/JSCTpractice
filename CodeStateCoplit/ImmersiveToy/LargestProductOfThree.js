const largestProductOfThree = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    arr.sort((a,b) => a-b); 

    const k = arr.length;

    // console.log(arr);

    return Math.max(arr[k-1]*arr[k-2]*arr[k-3],arr[0]*arr[1]*arr[k-1]);

};
let output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output);