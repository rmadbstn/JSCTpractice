const bubbleSort = function (arr) {
    // TODO: 여기에 코드를 작성합니다.

    let checkLength = arr.length;
    for (let i = 0; i < arr.length; i++) {

        let checkSwap = false;

        for (let j = 0; j < checkLength - 1; j++) {


            if (arr[j] > arr[j + 1]) {

                checkSwap = true;

                let temp = arr[j];

                arr[j] = arr[j + 1];

                arr[j + 1] = temp;



            }



        }

        if(checkSwap === false ){
            break;
        }
        checkLength--;


    }

    return arr;

};
let output = bubbleSort([2, 1, 3]);
console.log(output);