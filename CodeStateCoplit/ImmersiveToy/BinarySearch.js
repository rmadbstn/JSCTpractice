const binarySearch = function (arr, target) {
    // TODO : 여기에 코드를 작성합니다.
  };















  

//시간초과 실패.

// const binarySearch = function (arr, target) { 
//     // TODO : 여기에 코드를 작성합니다.

//     let count = 0;

//     let newArr = [];
//     newArr.push(arr.shift());

//     if (newArr[0] === target) {
//         return count;
//     }


//     while (newArr.length > 0) {

//         let leng = newArr.length;

//         // console.log(leng);
//         // console.log(newArr);


//         for (let i = 0; i < leng; i++) {

//             if (arr.length > 0) {
//                 count++;
//                 if (arr[0] === target) {
//                     return count;
//                 }
//                 newArr.push(arr.shift());
//             } else {
//                 return -1;
//             }

//             if (arr.length > 0) {
//                 count++;
//                 if (arr[0] === target) {
//                     return count;
//                 }
//                 newArr.push(arr.shift());
//             } else {
//                 return -1;
//             }

//             newArr.shift();
//         }

//     }



// };


// let output = binarySearch([4, 5, 6, 9], 100);
// console.log(output);