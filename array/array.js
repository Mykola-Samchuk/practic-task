const students = ["Олександр", "Ігор", "Оленa", "Ірa", "Олексій", "Світланa"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// Separate boys from girls
function getGirls(people){
    const girls = [];

    for(let i=0; i<people.length; i++){

        if(people[i][people[i].length-1] == `a`){
            girls.push(people[i]);
        };
    };
    
    return girls;
};
console.log(getGirls(students))

function getBoys(people){
    const boys = [];

    for(let i=0; i<people.length; i++){

        if(people[i][people[i].length-1] !== `a`){
            boys.push(people[i]);
        };
    };

    return boys;
};
console.log(getBoys(students))

// Divide students into pairs (boy + girl) to work on the project. 
// You should get an nested array with pairs of students: [["Alexander", "Elena"], [..], [...]];
function getPairs(boys, girls){
    studentPairs = [];

    for(let i=0; i<boys.length; i++){
        studentPairs.push([boys[i], girls[i]])
    };

    return studentPairs;
};
console.log(getPairs(getBoys(students), getGirls(students)));

// Compare pairs from the previous task and the topic of the projects that students will work on. 
// The nested array of the form should turn out: [["Alexander and Elena", "Theory of automata"], [...], [...]]

function getPairsThemes(studentsPairs, themes){
    let pairsThemes = [];

    for(let i=0; i<studentsPairs.length; i++){
        pairsThemes.push([studentsPairs[i][0] + ` i ` + studentsPairs[i][1], themes[i]])
    }

    return console.log(pairsThemes)
}
getPairsThemes(getPairs(getBoys(students), getGirls(students)), themes)