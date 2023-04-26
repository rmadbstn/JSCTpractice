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

        if(str.length>=addStr.length){
            return;
        }

        for(let i=0;i<checkArr.length;i++){

            if(!checkArr[i]){
                
                str+=arr[i];
                checkArr[i] = true;
                maker();
                addStr.slice(addStr.length-2,1);
                checkArr[i] = false;

            }
            


        }

    }
    return result;
};


output1 = powerSet('jjumpu');
console.log(output1); 