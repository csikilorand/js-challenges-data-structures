const maxNumber = (array) =>{
    let maxNum = array[0];
    for(let i=1;i<array.length;i++){
        if(maxNum < array[i]){
            maxNum = array[i]
        }
    }

    return maxNum;
}
module.exports = maxNumber;