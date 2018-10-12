var censoredWords =[1,2,3];
function censor(inStr){
    for(idx in censoredWords){
        inStr = inStr.replace(censoredWords[idx],"****");
    }
}