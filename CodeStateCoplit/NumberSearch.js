function numberSearch(str) {
    // TODO: 여기에 코드를 작성합니다.

    let sum = 0;
    let length = 0;

    if(str.length===0){
        return 0;
    }

    for (let i = 0; i < str.length; i++) {


        if (str[i] !== ' ') {

            if (Number(str[i])) {// ' '을 Number로 변환하면 0을 반환하더라. 

                sum += Number(str[i]);
                // console.log('더해지는값:' + str[i]);

            }else{


                length++;



            }



        }


    }

    // console.log(sum / length);

    return Math.round(sum / length);


}

let output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
console.log(output)
