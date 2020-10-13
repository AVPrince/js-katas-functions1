console.log('Hi Alan.');

// 0 Kata
// multiply
console.log("multiply++++++++++++");

function multiply(a, b) {
    let result = a*b;
    return result;
}

console.log( multiply(2*3));
console.log( multiply(2,6));

// 1 Kata
// sum
console.log("sum++++++++++++");

function sum(a,b) {
    return a+b;
}        

console.log(sum(5,9));
console.log(sum(5,4));

// 2 kata
// avg
console.log("avg++++++++++++");

function avg(a,b,c) {
    let result = (a+b+c);
    result = result/3;
    return result;
}

console.log(avg(1,5,9));
console.log(avg(4,4,4));
console.log(avg(10,4,1));

// 3 kata
// greaterThan
console.log("greaterThan++++++++++++");

function greaterThan(a,b) {
    let result = a<b;
    result = true;
    if (a>b) {
        result = false;
    }
    return result
}

console.log(5,6);
console.log(4,1);

// 7 kata
// longestWord
console.log("longestWord++++++++++++");

function longestWord(theString) {
    let words = theString.split(' ')
    console.log(words);

    let longest = '';

    let index = 0;
    while (index<words.length) {
        console.log(words[index]);

        if(longest.length< words[index].length){
            longest = words[index];
        }
        index = index+1;
        // index++;
    }

    return longest
}

console.log( longestWord("have you ever seen a penguin go to tea?"));
console.log(longestWord("fool me once, shame on me. fool me twice, shame on heathcliff"));