function readVertically(arr) {
  // code goes here
  let result = '';
  let index = 0;
  while(true){
    
    let addResult = '';

    for(let i=0; i < arr.length;i++){
      
      
      if(arr[i][index]){
        addResult+=arr[i][index];
      }
      
      
    }
    
    
    if(addResult===''){
      break;
    }
    
    result+=addResult;
    index++;
    
    
    
    
  }
  
  return result;
  
}