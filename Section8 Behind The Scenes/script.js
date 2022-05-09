'use strict';
/*
function calcAge(birthyear) {
    const age = 2022 - birthyear;
    
    function printAge(){
        const output = `${firstName} You are ${age}, born in ${birthyear}`;
        console.log(output);

        if(birthyear >= 1981 && birthyear <= 1996){
            var Millenial = true;
            const str = `U a Millenial goodjob`;
            console.log(str);

            function add(a,b){
                return a + b;
            }
        }
    }
    printAge();
    return age;
}

const firstName = 'bujul';
calcAge(1991);
*/
/*
console.log(me);
console.log(job);
console.log(year);

var me = 'Mncch'
let job = 'haha'
const year = '2022'

console.log(addDecl(2, 3));
console.log(addExpr(2, 3)); //can not access
console.log(addArrow(2, 3)); //can not access

function addDecl(a,b){
    return a + b;
}

const addExpr = function(a,b){
    return a + b;
}

const addArrow = (a,b) => a + b;
*/

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);
// Different last names

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(jessica);
console.log(marriedJessica); 
// Davis set for both

// Copying Objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log(jessica2);
console.log(jessicaCopy);
//object assign copies only first level

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
// Mary & John will be assigned to the original array also
console.log(jessica2);
console.log(jessicaCopy);


