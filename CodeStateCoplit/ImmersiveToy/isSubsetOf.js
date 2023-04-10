const isSubsetOf = function (base, sample) {
    // TODO: 여기에 코드를 작성합니다.
    for(let i = 0;i<sample.length;i++){

        let check = false;
  
      for(let j= 0 ; j<base.length;j++){
  
        if(sample[i]===base[j]){
          break;
        }
  
        if(j===base.length-1){
            check = true;
        }
      }
  
      if(check === true){
        return false;
      }
      
  
    }

    return true;
    
  };
  
  let base = [1, 2, 3, 4, 5];
let sample = [6, 7];
let output = isSubsetOf(base, sample);
console.log(output);