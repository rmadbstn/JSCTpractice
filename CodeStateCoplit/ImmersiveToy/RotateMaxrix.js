const rotateMatrix = function (matrix, k = 1) { // k : 남은 회전 수


    let arr = [];

    if (matrix.length === 0) {
        return [];
    }

    let N = matrix.length;
    let M = matrix[0].length;
    for (let i = 0; i < M; i++) {//가로.


        let innerArr = [];

        for (let j = 1; j <= N; j++) { // 세로.



            // matrix[matrix.length-j][i];
            innerArr.push(matrix[N - j][i]);


        }

        arr.push(innerArr);




    }
    k--;

    if (k === 0 || k === undefined) {
        return arr;
    } else {
        rotateMatrix(arr, k);
    }
};

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];
console.log(matrix[0][0]); // --> 1
console.log(matrix[3][2]); // --> 15

const rotatedMatrix = rotateMatrix(matrix,1);
console.log(rotatedMatrix[0][0]); // --> 13
console.log(rotatedMatrix[3][2]); // --> 8