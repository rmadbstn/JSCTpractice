const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.

  base = base.sort();
  sample = sample.sort();

  let checkIndex = 0;

  for (let i = 0; i < base.length; i++) {

    if(base[i]===sample[checkIndex]){


      if(checkIndex===sample.length-1){
        return true;
      }

      checkIndex++;


    }

  }

  return false;

};

let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output);