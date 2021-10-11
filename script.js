//1. Отримайте у користувача число(N,M) від якого ми будемо складати.
//2. Пам'ятайте, ЧИСЛО, не РЯДОК!
//3. Перевірте, чи є передане значення (N,M) ЦІЛИМ числом. 
//4. Додайте перевірку – чи  парні числа. (Використовуйте для цього if/else). 
//5. Додайте всі числа.
//5. Додайте всі парні числа.
//5. Додайте всі не парні числа.
const numberFirst = 10;
const numberEnd = 100;

// 3.
if(!isNaN(numberFirst) && !isNaN(numberEnd)){
    console.log(`Yes ` + numberFirst +` and ` + numberEnd + ` is number`);
}
else console.log(`The value is not a number`);

// 3.
if(Number.isInteger(numberFirst) && Number.isInteger(numberEnd)){
    console.log(`Yes ` + numberFirst +` and ` + numberEnd + ` is integer`);
}
else console.log(`The value is not integer`);

// 4

for(let i=numberFirst; i<=numberEnd; i++){
    if( i % 2 === 0){
        
    }
   
}
console.log(total)
