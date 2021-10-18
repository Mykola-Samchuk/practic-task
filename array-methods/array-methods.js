// Create a function getRandomArray (length, min, max) - which returns an array of random integers. 
// The function has parameters: length - the length of the array, min - the minimum value of the integer, 
// max - the maximum value of the integer. 
// Example: getRandomArray (15, 1, 100) -> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]
function getRandomArray(length, min, max){
    const minNumber =  Math.min(min, max);
    const maxNumber = Math.max(min, max);
    const arrRandom = []
    
    
    for(let i=0; i<length; i++){
        arrRandom.push(Math.floor(minNumber + Math.random() * (maxNumber + 1 - minNumber)))
    }
    console.log(arrRandom)
}
getRandomArray(5, 1, 10)