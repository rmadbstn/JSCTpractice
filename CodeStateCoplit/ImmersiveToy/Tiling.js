let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.

  let memo = Array(n+1).fill(0);

  memo[1] = 1;
  memo[2] = 2;

  let tileRecycle = function(n) {

    if(memo[n]!==0){
      return memo[n];
    }
  
    memo[n] = tileRecycle(n-1)+tileRecycle(n-2);
  
    return memo[n];

  }

  return tileRecycle(n);

};
let output = tiling(4);
console.log(output); 