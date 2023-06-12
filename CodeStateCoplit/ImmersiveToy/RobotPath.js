const robotPath = function (room, src, dst) { //src = 출발지, dst = 목적지 => 최소 경로 구하기.
    // TODO: 여기에 코드를 작성합니다.


    let queue = [];
    
    queue.unshift(src); //앞에 출발지, 목적지 동시 삽입
    queue.unshift(dst); 
    

    while(true){

      queue.












    }
    






  };

  let room = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0],
  ];
  let src = [4, 2];
  let dst = [2, 2];
  let output = robotPath(room, src, dst);
  console.log(output); // --> 8