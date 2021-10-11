// Створити функцію getMaxDigit(number) 
// – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
function getMaxDigit(number){
    let arrNumber = String(number).split('');
    let max = arrNumber[0];

    for(let i = 0; i <= arrNumber.length; i++){
        if(arrNumber[i] > max){
            max = arrNumber[i]
        }
    }
    console.log(max)
}
 getMaxDigit(1236)

// Створити функцію, яка форматує ім'я, роблячи першу букву великою. 
// ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
function getFirstLetterUpper(word){
    const wordString = String(word).toLowerCase();
    const firstLetterUpper = wordString[0].toUpperCase();
    const wordSlice = wordString.slice(1)
    const wordUpper = firstLetterUpper+wordSlice
    console.log(wordUpper)
}
getFirstLetterUpper('vlad')