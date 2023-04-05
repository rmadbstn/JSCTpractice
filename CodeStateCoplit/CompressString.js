function compressString(str) {
    // TODO: 여기에 코드를 작성합니다.

    let result = '';
    let check = '';
    let count = 0;
    for (let i = 0; i <= str.length; i++) {

        if (i === str.length) {

            if (count < 3) {
                for(let j=0;j<count;j++){
                    result+=check;
                }
            } else {
                result += `${count}` + check;//그냥 count한번 써보자 어케 되는지.
            }
        
            return result;

        }

        if (str[i] !== check) {

            if (count < 3) {

                for(let j=0;j<count;j++){
                    result+=check;
                }

            } else {
                result += `${count}` + check;//그냥 count한번 써보자 어케 되는지.
            }


            check = str[i];

            // console.log(check);

            count = 1;

        } else {

            count++;


        }


    }
    return result;

}
let output = compressString('wwwggoppopppp');
console.log(output);
