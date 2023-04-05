function computeSquareRoot(num) {
    const diffs = [1, 0.1, 0.01, 0.001];//단위별로 배열로 나눠놓고 하니 편하다. 
    let base = 1;   //base값으로 1을 잡아놓고 단위별로 더해가며 제곱값의 근사치에 접근한다.
    for (let i = 0; i < diffs.length; i++) {
        while (base * base < num) {
            base = base + diffs[i];
        }

        if (base * base === num) {
            return base;
        } else {
            base = base - diffs[i];
        }
    }
    return Number(base.toFixed(2));
}

let output = computeSquareRoot(9);
console.log(output);