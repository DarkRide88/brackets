module.exports = function check(str, bracketsConfig) {
    let inpStr = str.split('');   
    let openBracket;
    let closeBracket;  
        for(let i = 0; i < inpStr.length; i++){
            for(let j = 0; j < bracketsConfig.length; j++){
                openBracket = bracketsConfig[j][0] 
                closeBracket = bracketsConfig[j][1]              
                if(inpStr[i] == openBracket && inpStr[i+1] == closeBracket){
                    inpStr.splice(i,2)
                    i = -1;  
                }  else {                   
                    continue;
                }               
            } 
        }  
        if(inpStr.length == 0){
            return true
        } else {
            return false
        }    
    }