function removeExtremes(arr) {
  let maxIndex=0;
  let maxCount=0;

  let minIndex=0;
  let minCount=20;

  let result = [];
  
  for(let i=0;i<arr.length;i++){

    if(arr[i].length>=maxCount){

        maxCount = arr[i].length;
        maxIndex = i;
    }

    if(arr[i].length<=minCount){
        minCount = arr[i].length;
        minIndex = i;
    }

  }

  for(let i=0;i<arr.length;i++){
   
    if(i!==maxIndex&&i!==minIndex){
        result.push(arr[i]);
    }

  }
  
  return result;

}

output = removeExtremes(['where', 'is', 'the', 'longest', 'word']);
console.log(output);