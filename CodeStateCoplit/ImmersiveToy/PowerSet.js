const powerSet = function (str) {
    // TODO: 여기에 코드를 작성합니다.

    let arr = str.split('').sort();

    //중복 제거

    let result = [''];

    for(let i = 0; i<arr.length-1;i++){

        if(arr[i]===arr[i+1]){

            arr.splice(i,1);

        }

    }


    let checkArr = Array(arr.length).fill(false);

    let addStr = '';

    function maker(){
 
        result.push(addStr);

        if(arr.length<=addStr.length){
            return;
        } 

        for(let i=0;i<checkArr.length;i++){

            if(!checkArr[i]){
                console.log('check');
                addStr+=arr[i];
                checkArr[i] = true;
                maker();
                addStr.slice(addStr.length-2,1);
                checkArr[i] = false;

            }
            


        }

    }
    maker(); 
    console.log(arr);
    return result;
};


output1 = powerSet('jjumpu');
console.log(output1); 