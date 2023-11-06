const occurences = (str, char) =>{
    let count = 0;
    for(i of str){
        if(char === i){
            count++;
        }
    }
    return count;
}
module.exports = occurences;