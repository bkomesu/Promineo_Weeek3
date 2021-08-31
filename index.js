// Question 1 

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

// Question 2 

// var names = ['Sam', 'Tommmy', 'Tim', 'Sally', 'Buck', 'Bob']