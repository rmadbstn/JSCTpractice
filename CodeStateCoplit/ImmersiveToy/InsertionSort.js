const insertionSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.


  for (let i = 0; i < arr.length; i++) {


    let cur = arr[i];

    // console.log('cur:'+cur);

    for (let j = 0; j < i; j++) {

      if (cur <= arr[j]) {

        let head = arr.slice(0, j)  

        // console.log('head:'+head);

        let body = cur;

        // console.log('body:' + body);

        let hip = arr.slice(j,i);
        // console.log('hip:'+hip);
        let tail = arr.slice(i + 1, arr.length);

        // console.log('prevTail:'+tail);


        tail = hip.concat(tail);

        // console.log('tail:' + tail);

        arr = head.concat(body, tail);

        break;


      }



    }


  }
  return arr;
};

let output = insertionSort([2, 3, 5,4]);
console.log(output); 