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

    return arrRandom
}
console.log(getRandomArray(5, 1, 10))

// Create a function getAverage (... numbers) - which calculates the arithmetic mean of all arguments passed to it. 
// INTEGER NUMBERS ARE IGNORED
// Example: getAverage (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> 34.4

function getAverage(...numbers){
    let nums = numbers.filter((item)=>{
        return Number.isInteger(item)
    })

    let sum = 0
    nums.map((item)=>{
        sum += item
    })

    return sum/nums.length
}
console.log(getAverage (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

// Create a function filterEvenNumbers (... numbers) - which filters even numbers passed as arguments to the function
// Example: filterEvenNumbers (1, 2, 3, 4, 5, 6) -> [1, 3, 5]

function filterEvenNumbers(...numbers){
    let result = numbers.filter((item)=>{
        if(item % 2 == 1){
            return item
        }
    })

    return result
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6))

// Create a function countPositiveNumbers (... numbers) - which will count the number of numbers greater than 0
// Example: countPositiveNumbers (1, -2, 3, -4, -5, 6) -> 3

function countPositiveNumbers(...numbers){
    let sum = 0
    numbers.map((item)=>{
        if(item >= 0){
            sum += 1
        }
        
    })
    return sum
}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6))
// or second answer
function countPositiveNumbersFilter(...numbers){
    let greaterNumbers = numbers.filter((item)=>{
        return item > 0
        
    })
    return greaterNumbers.length
}
console.log(countPositiveNumbersFilter(1, -2, 3, -4, -5, 6))
