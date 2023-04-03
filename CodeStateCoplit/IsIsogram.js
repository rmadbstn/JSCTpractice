function isIsogram(str) {
    // TODO: 여기에 코드를 작성합니다.
    str = str.toLowerCase();

    let check = new Array(26); //알파벳 여부 저장

    for (let i = 0; i < str.length; i++) {

        let checkIndex = str.charCodeAt(i) - 65;

        if (check[checkIndex] === true) {
            return false;
        }

        check[checkIndex] = true;

    }

    return true;




}

output = isIsogram('Dermatoglyphics');
console.log(output);