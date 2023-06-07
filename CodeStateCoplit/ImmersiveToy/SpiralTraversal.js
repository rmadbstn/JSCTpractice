const spiralTraversal = function (matrix) {
    // TODO: 여기에 코드를 작성합니다.



    let dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]; //상 우 하 좌. dirs[0] 상, dirs[1]

    let checkArr = [];

    let result = '';

    for (let i = 0; i < matrix.length+1; i++) {
        checkArr[i] = Array(matrix[i].length).fill(false);
    }

    let xy = [0, 0];

    let recur = function (dirsIdx, cur) {


        let x = cur[1];  //현재 x좌표
        let y = cur[0];  //현재 y좌표

        if (x  > matrix[0].length - 1 || x < 0 || y > matrix.length || y < 0 || checkArr[y][x] === true){
            return; //방향을 바꿨음에도 범위를 벗어나게되면 리턴. 
        }



        result += matrix[y][x];
        checkArr[y][x] = true; //방문한 장소 체크. 

        console.log(`[${[y,x]}],${dirsIdx}`);

        if (x + dirs[dirsIdx][1] > matrix[0].length - 1 || x + dirs[dirsIdx][1] < 0 || y + dirs[dirsIdx][0] > matrix.length || y + dirs[dirsIdx][0] < 0 || checkArr[y + dirs[dirsIdx][0]][x + dirs[dirsIdx][1]] === true) {

            if (dirsIdx === 3) {
                dirsIdx = 0;
            } else {
                dirsIdx++;
            }

        }



        let nextX = x + dirs[dirsIdx][1];
        let nextY = y + dirs[dirsIdx][0];

        let newCur = [nextY,nextX];

        // console.log(newCur);
    
        recur(dirsIdx, newCur); //방향과 새로운 좌표 넣어주기. 

        //..

    }

    recur(1,[0,0]);
    
    return result;
    

};

matrix = [
    ['T', 'y', 'r', 'i'],
    ['i', 's', 't', 'o'],
    ['n', 'r', 'e', 'n'],
    ['n', 'a', 'L', ' '],
  ];
  output = spiralTraversal(matrix);
  console.log(output);