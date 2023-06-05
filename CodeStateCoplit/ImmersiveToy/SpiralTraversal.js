const spiralTraversal = function (matrix) {
    // TODO: 여기에 코드를 작성합니다.

    

    let dirs = [[1,0],[0,1],[-1,0],[0,-1]]; //상 우 하 좌. dirs[0] 상, dirs[1]
    
    let checkArr = [];

    let result = '';

    for(let i=0;i<matrix.length;i++){
        checkArr[i] = Array(matrix[i].length),fill(false);    
    }

    let xy = [0,0];

    let recur = function(dir,cur) {


        let x = cur[1];  //현재 x좌표
        let y = cur[0];  //현재 y좌표

        result += matrix[y][x];
        checkArr[y][x] = true; //방문한 장소 체크. 


        let nextX = x+dir[0];
        let nextY = y+dir[1];
        //..

    }
    


  };
  