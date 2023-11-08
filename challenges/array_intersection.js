const arrayIntersection = (array1, array2) =>{
    const combinedArray = []
    if(array1.length < array2.length){
        for(let i=0;i<array1.length;i++){
            if(array2.includes(array1[i])){
                combinedArray.push(array1[i]);
            }
        }
    }else{
        for(let i=0;i<array2.length;i++){
            if(array1.includes(array2[i])){
                combinedArray.push(array2[i]);
            }
        }
    
    }
    return combinedArray;
}
module.exports = arrayIntersection