const powerSet = function (str) {
    // TODO: 여기에 코드를 작성합니다.

    let arr = str.split('').sort();

    //중복 제거

    for(let i = 0; i<arr.length-1;i++){

        if(arr[i]===arr[i+1]){

            arr.splice(i,1);

        }

    }


    let checkArr = Array(arr.length+1).fill(false);







    return arr;
};


output1 = powerSet('jjumpu');
console.log(output1); 