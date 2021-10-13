// Створити функцію getMaxDigit(number) 
// – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
function getMaxDigit(number){
    let arrNumber = String(number).split('');
    let max = arrNumber[0];

    for(let i = 0; i <= arrNumber.length; i++){
        if(arrNumber[i] > max){
            max = arrNumber[i]
        }
    };
    
    return max
}
 console.log(getMaxDigit(1236))

// Створити функцію, яка форматує ім'я, роблячи першу букву великою. 
// ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
function getFirstLetterUpper(word){
    const wordString = String(word).toLowerCase();
    const firstLetterUpper = wordString[0].toUpperCase();
    const wordSlice = wordString.slice(1);
    const wordUpper = firstLetterUpper + wordSlice;

    return wordUpper;
}
console.log(getFirstLetterUpper('AbraCadabra'))

// Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
// Приклад: countLetter("а", "Асталавіста") -> 4
function countLetter(letter, word){
    const letterLower = String(letter).toLowerCase();
    const wordLowerArr = String(word).toLowerCase().split(``);
    let totlaLetter = 0;

    for(let i= 0; i < wordLowerArr.length; i++){
        if(wordLowerArr[i] == letterLower){
            totlaLetter = totlaLetter + 1 
        }
    };

    return totlaLetter;
}
console.log(countLetter(`a`, `Astalavista`))

// Створіть функцію, яка видаляє всі букви з речення. 
// Приклад: deleteLetters('a', "blablabla") -> "blblbl"
function deleteLetters(letter, word){
    const letterLower = String(letter).toLowerCase();
    const wordLowerArr = String(word).toLowerCase().split(``);
    let arrWord = []
    for(let i = 0; i < wordLowerArr.length; i++){
        if(letterLower !== wordLowerArr[i]){
            arrWord.push(wordLowerArr[i])
        }
    }
     
    return arrWord.join("")
}
console.log(deleteLetters(`a`, `blablabla`))