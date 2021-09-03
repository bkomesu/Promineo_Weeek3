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

// Question 5

var names = ['Sam', 'Tommmy', 'Tim', 'Sally', 'Buck', 'Bob']

for (i = 0; i < [names.length-1]; i++){
   var letters = 0;
   letters = names.map(function(element){
      return element.length;
      
   }); 
   
   var nameLengths = (letters.reduce(function (accumulator, currentValue){
       return (accumulator + currentValue)
   }));
}
   console.log(nameLengths);

