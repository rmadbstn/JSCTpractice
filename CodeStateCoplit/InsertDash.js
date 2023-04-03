function insertDash(str) {
    let check = false;

    let result = "";

    for (let i = 0; i < str.length; i++) {

        if (Number(str[i]) % 2 === 1) {

            if (!check) {
                check = true;
            } else {
                result += "-";
            }

        }else{
            check = false;
        }

        result += str[i];

    }

    return result;
}
let output = insertDash('454793');
console.log(output);