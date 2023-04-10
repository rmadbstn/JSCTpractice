
function fibonacci(n) {
    // TODO: 여기에 코드를 작성합니다.

    const dpArr = [0, 1];
    const dp = (n) => {

        if (dpArr[n] !== undefined) {
            return dpArr[n];
        }


        dpArr[n] = dp(n - 1) + dp(n - 2);

        return dpArr[n];


    }

    return dp(n);

}

output = fibonacci(5);
console.log(output);