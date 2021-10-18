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
console.log(checkGirls(students))

function checkBoys(people){
    const boys = [];

    for(let i=0; i<people.length; i++){

        if(people[i][people[i].length-1] !== `a`){
            boys.push(people[i]);
        };
    };

    return boys;
};
console.log(checkBoys(students))

//2. Divide students into pairs (boy + girl) to work on the project. 
// You should get an nested array with pairs of students: [["Alexander", "Elena"], [..], [...]];
function getPairs(boys, girls){
    studentPairs = [];

    for(let i=0; i<boys.length; i++){
        studentPairs.push([boys[i], girls[i]])
    };

    return studentPairs;
};
console.log(getPairs(checkBoys(students), checkGirls(students)));

//3. Compare pairs from the previous task and the topic of the projects that students will work on. 
// The nested array of the form should turn out: [["Alexander and Elena", "Theory of automata"], [...], [...]]

function getPairsThemes(studentsPairs, themes){
    let pairsThemes = [];

    for(let i=0; i<studentsPairs.length; i++){
        pairsThemes.push([studentsPairs[i][0] + ` i ` + studentsPairs[i][1], themes[i]])
    }

    return pairsThemes
}
console.log(getPairsThemes(getPairs(checkBoys(students), checkGirls(students)), themes))

//4. Compare marks with students: [["Sasha", 4], [...], [...]]

function getStudentsMarks(student, marks){
    studentMarks = [];

    for(let i=0; i<marks.length; i++){
        studentMarks.push([student[i], marks[i]])
    }
    return studentMarks;
}
console.log(getStudentsMarks(students, marks))

//5. Give each pair a random score (1 to 5) per project

