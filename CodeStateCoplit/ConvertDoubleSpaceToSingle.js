function convertDoubleSpaceToSingle(str) {

    let twoCount=0;
    let result = "";
  
    for(let i=0;i<str.length;i++){
  
        if(str[i]===" "){
            if(twoCount===1){
                twoCount = 0;
                continue;
            }
            twoCount+=1;
        }else{
            twoCount=0;
        }
        
        result+=str[i];
    }
    
    return result; 
    // TODO: 여기에 코드를 작성합니다.
  }

  let output = convertDoubleSpaceToSingle('string  with  double  spaces');
  console.log(output);