const sudoku = function (board) {
    // TODO: 여기에 코드를 작성합니다.

    const startSudoku = function (board) {

        for (let i = 0; i < board.length; i++) {

            for (let j = 0; j < board[i].length; j++) {


                if(board[i][j]===0){


                    checkBoard(i,j)
                    

                }



            }
        }
    }


    

};
