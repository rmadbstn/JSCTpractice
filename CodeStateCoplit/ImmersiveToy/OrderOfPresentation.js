function orderOfPresentation(N, K) {

  //경우의 수로 계산하는 법을 익혀보자잉?

  let result = 0;

  const fac = (n) => {


    if (n <= 1) {
      return 1;
    }
    return n * fac(n - 1);
  }


  let check = Array(N+1).fill(false);

  for (let i = 0; i < N; i++) {

    let count = 0; //K[i]값보다 작은 친구들의 개수를 센다. 

    check[K[i]] = true;

    for (let j = 1; j < K[i]; j++) {  //K[i]보다 작은 친구들의 check여부 -> 앞에서 쓰였는가

      if (!check[j]) {


        count++;


      }

    }
    // console.log("count:"+count);
    // console.log("fac:"+fac(N - i - 1));
    // console.log("fac("+(N-i-1)+")");
    

    result += (count * fac(N - i - 1));


  }


  return result;
}
let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output);