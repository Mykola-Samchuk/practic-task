
//NIck Morgan -  Task Create a bad phrase generator
// - use `+` for string
// - use `join` 
let bodyParts = [`nose`,`lips`,`arms`,`legs`,`body`,];
let animals = ['Chicken','Elephant','Monkey','Rooster','Ostrich']
let randomWords = [`funny`,`big`,`small`]
function random(){
    return Math.floor(Math.random()*5)
}
// +
console.log(`Your `+bodyParts[random()]+` is like `+animals[random()])
// join
let randmPhrase = [`Your`,bodyParts[random()],`is like`,animals[random()]].join(" ")
console.log(randmPhrase)

// Next Cursor task
// In this task use only:
// cycles-branching, push,pop, shift, unshift
const students = ["Олександр", "Ігор", "Оленa", "Ірa", "Олексій", "Світланa"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//1. Separate boys from girls
function checkGirls(people){
    const girls = [];

    for(let i=0; i<people.length; i++){

        if(people[i][people[i].length-1] == `a`){
            girls.push(people[i]);
        };
    };
    
    return girls;
};
console.log(`Separate boys from girls`, checkGirls(students))

function checkBoys(people){
    const boys = [];

    for(let i=0; i<people.length; i++){

        if(people[i][people[i].length-1] !== `a`){
            boys.push(people[i]);
        };
    };

    return boys;
};
console.log(`Separate boys from girls`, checkBoys(students))

//2. Divide students into pairs (boy + girl) to work on the project. 
// You should get an nested array with pairs of students: [["Alexander", "Elena"], [..], [...]];
function getPairs(){
    let boys = checkBoys(students);
    let girls = checkGirls(students);
    studentPairs = [];

    for(let i=0; i<boys.length; i++){
        studentPairs.push([boys[i], girls[i]]);
    };

    return studentPairs;
};
console.log(`Divide students into pairs (boy + girl)`,getPairs());

//3. Compare pairs from the previous task and the topic of the projects that students will work on. 
// The nested array of the form should turn out: [["Alexander and Elena", "Theory of automata"], [...], [...]]

function getPairsThemes(studentsPairs, themes){
    let pairsThemes = [];

    for(let i=0; i<studentsPairs.length; i++){
        pairsThemes.push([studentsPairs[i][0] + ` i ` + studentsPairs[i][1], themes[i]]);
    };

    return pairsThemes;
};
console.log(`Compare pairs theme`, getPairsThemes(getPairs(), themes));

//4. Compare marks with students: [["Sasha", 4], [...], [...]]

function getStudentsMarks(student, marks){
    studentMarks = [];

    for(let i=0; i<marks.length; i++){
        studentMarks.push([student[i], marks[i]]);
    };
    return studentMarks;
};
console.log(`Compare marks with students`, getStudentsMarks(students, marks));

//5. Give each pair a random score (1 to 5) per project: [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function pairRandomMarks(pair, min, max){
    let pairMarksTheme =[];

    for(let i=0; i<pair.length; i++){
        pairMarksTheme.push([pair[i][0], Math.floor(min + Math.random() * (max + 1 - min))]);
    };

    return pairMarksTheme;
};

console.log(`Get students theme marks`, pairRandomMarks(getPairsThemes(getPairs(), themes), 1,5 ));