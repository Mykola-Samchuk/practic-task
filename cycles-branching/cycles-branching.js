//1. Отримайте у користувача число(N,M) від якого ми будемо складати.
//2. Перевірте чи це число?
//3. Перевірте, чи є передане значення (N,M) ЦІЛИМ числом. 
//4. Додайте перевірку – чи  парні числа. (Використовуйте для цього if/else). 
//5. Додайте всі числа.
//6. Додайте всі парні числа.
//7. Додайте всі не парні числа.
const numberFirst = 1;
const numberEnd = 10;

// 2.
if(!isNaN(numberFirst) && !isNaN(numberEnd)){
    console.log(`2. Yes ` + numberFirst +` and ` + numberEnd + ` is number`);
}
else console.log(`2. The value is not a number`);

// 3.
if(Number.isInteger(numberFirst) && Number.isInteger(numberEnd)){
    console.log(`3. Yes ` + numberFirst +` and ` + numberEnd + ` is integer`);
}
else console.log(`3. The value is not integer`);

// 4.
if(numberFirst % 2 === 0 && numberEnd % 2 === 0){
    console.log(`4. Yes ${numberFirst} and ${numberEnd} is even numbers`) 
}
else console.log(`4. One or two value is not even numbers`)

// 5.
let totalNumbers = numberFirst+numberEnd;
console.log(`5. ${totalNumbers}`)

//6.
let totalEven = 0;
for(let i = numberFirst; i <= numberEnd; i++){
    if( i % 2 == 0){
        totalEven += i
    }
}
console.log(`6. ${totalEven}`)

// 7.
let totalNotEven = 0;
for(let i = numberFirst; i <= numberEnd; i++){
    if(i % 2 !== 0){
        totalNotEven += i
    }
}
console.log(`7. ${totalNotEven}`)