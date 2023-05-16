const balancedBrackets = function (str) {
    // TODO: 여기에 코드를 작성합니다.


    let stack = [];

    for(let i=0; i<str.length;i++){

        let target = str.charAt(i);

        // console.log("target:"+target);

        if(target === '[' || target === '(' || target === '{' ){
            stack.push(target);
        }else{

            let comparator = stack.pop();
            
            // console.log(`comparator:${comparator}`);
            if(target === ']' && comparator !== '['){
                return false;
            }

            if(target === ')' && comparator !== '('){
                // console.log('여기 왔니?');
                return false;
            }

            if(target === '}' && comparator !== '{'){
                return false;
            }

        }
        
        // console.log(stack);
    }

    if(stack.length===0){
        return true;
    }

    return false;

  };
  

  let output = balancedBrackets('[({})]');
  console.log(output); 