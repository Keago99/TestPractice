

function analyzeArray(array){
    let sum = 0;
    let average = 0;
    var min = 0;
    let max = 0
    let length = array.length;

    min = array[0];
    for(let i = 0; i < array.length; i++){
        if (array[i] < min){
            min = array[i];
        }
        if (array[i] > max){
            max = array[i];
        }
        sum += array[i];
    }
    average = sum/(array.length);

    const arrayObject = {};
    arrayObject.min = min;
    arrayObject.average = average;
    arrayObject.min = min;
    arrayObject.max = max;
    arrayObject.length = length;
    console.log(arrayObject);
    return arrayObject;
}
analyzeArray([6,4,3,1,11]);



module.exports = {analyzeArray};