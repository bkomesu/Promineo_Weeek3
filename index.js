// Question 1 
/*

var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

function subtractFirstFromLast(){
    var par1 = ages[0];
    var par2 = ages[ages.length-1];
    return answer = par2 - par1;
}   

console.log(subtractFirstFromLast(ages));

ages.push(95);
console.log(ages)

console.log(subtractFirstFromLast(ages));


function findAverage(){
    var total = 0
    for (let i = 0; i < ages.length; i++){
        total += ages[i];
    }
    return total / ages.length;
}

console.log(findAverage(ages));

*/

// Question 2 - a

/*

 var names = ['Sam', 'Tommmy', 'Tim', 'Sally', 'Buck', 'Bob']

 for (i = 0; i < [names.length-1]; i++){
    var letters = 0;
    letters = names.map(function(element){
       return element.length;
       
    }); 
    
    var sumOfLetters = (letters.reduce(function (accumulator, currentValue){
        return (accumulator + currentValue)
    }));

    var averageNumberOfLetters = sumOfLetters / names.length
    
}
// console.log(letters)
// console.log(sumOfLetters)
console.log(averageNumberOfLetters)    

// Question 2 - b
var out = '';
for(i = 0; i < names.length-1; i++){    
    names[i];
    out += names[i] + " ";     
}
console.log(out)

*/

// Question 5 & 6 
/*

var names = ['Sam', 'Tommmy', 'Tim', 'Sally', 'Buck', 'Bob']

for (i = 0; i < [names.length-1]; i++){
   var nameLengths = 0;
   nameLengths = names.map(function(element){
       return element.length;
   }); 
   
   var sumOfNameLengths = (nameLengths.reduce(function (accumulator, currentValue){
       return (accumulator + currentValue)
   }));
}
   console.log(nameLengths);
   console.log(sumOfNameLengths)

*/

// Question 7 
/*
function wordRepeater(word, n){
    let repeatedString = ""
    while (n > 0){
        repeatedString += word;
        n--
    }
    return repeatedString
}

console.log(wordRepeater("hi", 3));

*/

// Question 8 
/*
function displayFullname(first, last){
    console.log(first + " " + last)
}

displayFullname("Bruce", "Komesu")
*/

// Question 9 
/*
var hundredPlus = [100,10, 90, 52]
var hundredUnder = [10, 10, 3, 5, 4]

function moreThanHundred (array) {
    var sumOfArray = array.reduce(function(accumulator, currentValue){
        return accumulator + currentValue
    })
    if (sumOfArray > 100){
        console.log(true);
    }
}

console.log(moreThanHundred(hundredPlus)); 

*/

// Question 10 & 11
/*

var BigAVG = [100 , 100, 100, 100]
var SmallAVG = [2, 2, 2, 2,]
var equalToBigAvg = [100 , 100, 100, 100]


function arrayAverageCompare(array1, array2){
    var array1Avg = 0
    var array1Sum = (array1.reduce(function (accumulator, currentValue){
        return (accumulator + currentValue)
    }));
    
    array1Avg = (array1Sum / array1.length);

    var array2Avg
    var array2Sum = (array2.reduce(function (accumulator, currentValue){
        return (accumulator + currentValue)
    }));
    
    array2Avg = array2Sum / array2.length

    if(array1Avg == array2Avg){
        console.log("Array 1 and Array 2 have the same Average!");
    } else if (array2Avg>array1Avg){
        console.log("Array 2 Average is bigger!");
    } else if(array1Avg > array2Avg) {
        console.log(true);
    }else{
        console.log("you did not enter 2 arrays")
    }

}

    console.log(arrayAverageCompare(BigAVG, equalToBigAvg))
    console.log(arrayAverageCompare(SmallAVG, BigAVG ))
    console.log(arrayAverageCompare(BigAVG, SmallAVG))

*/

// Question 12
/*

function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside == true && moneyInPocket > 10.5){
        return true
    } else {
        console.log("either it is not hot outside or you do not have enough money in pocket")
    }
}

console.log(willBuyDrink(true, 11))
console.log(willBuyDrink(false, 11))
console.log(willBuyDrink(true, 9))

*/

// Question 13 Wnated to make a basic rock paper scissors however, want to look into making it with switch statement since, type 1 and type 2 coulbe interchangable and there would too much else/if statements
/*

function pokemonTriangle(type1, type2){
    if (type1 == "fire" && type2 == "water"){
        console.log("water wins!");
    }else if (type1 == "plant" && type2 == "water"){
        console.log("plant wins!");
    }else if (type1 == "fire" && type2 == "plant"){
        console.log("fire wins!");
    }else if (type2 == type1){
        console.log("Draw!")
    }
}

console.log(pokemonTriangle("fire","water"))
console.log(pokemonTriangle("plant","water"))
console.log(pokemonTriangle("fire","plant"))

*/