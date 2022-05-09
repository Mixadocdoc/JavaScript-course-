'use strict';
/*
function describeCountry(country, population, capitalCity){
    return(`${country} has ${population} million people
    and its capital is ${capitalCity}.`);
}

const Armenia = describeCountry('Armenia', 3, 'Yerevan');
console.log(Armenia);

const Finland = describeCountry('Finland', 6, 'Helsinki');
console.log(Finland);

const Spain = describeCountry('Spain', 47, 'Madrid');
console.log(Spain);
*/

/*
const worldPopulation = 7900;
//function declaration
function percentageOfWorld1(population){
    return (population / worldPopulation) * 100;
}

const ChinaPopulation = percentageOfWorld1(1441);
const ArmPopulation = percentageOfWorld1(3);

console.log(`China has ${ChinaPopulation} percent of the world population`);
console.log(`Armenia has ${ArmPopulation} percent of the world population`);

//function expression
const percentageOfWorld2 = function(population){
    return (population/worldPopulation) * 100;
}

const ChinaPopulation2 = percentageOfWorld2(1441);
const ArmPopulation2 = percentageOfWorld2(3);

console.log(`China has ${ChinaPopulation2} percent of the world population`);
console.log(`Armenia has ${ArmPopulation2} percent of the world population`);

//Arrow Function
const percentageOfWorld3 = population => (population/worldPopulation) * 100;

const ChinaPopulation3 = percentageOfWorld3(1441);
const ArmPopulation3 = percentageOfWorld3(3);

console.log(`China has ${ChinaPopulation3} percent of the world population`);
console.log(`Armenia has ${ArmPopulation3} percent of the world population`);
*/ 

/*
const worldPopulation = 7928;

function percentageOfWorld1(population){
    return (population / worldPopulation) * 100;
};
const describeCountry = function(country,population){
    return (`${country} has a population of ${population} million people,
    which is ${percentageOfWorld1(population)} % of the world.`);
};
console.log(describeCountry('Armenia',2.96));
console.log(describeCountry('Italy', 59.55));
console.log(describeCountry('Canada', 38.01));
console.log(describeCountry('Brazil', 212.6));

const pops = [2.96, 59.55, 38.01, 212.6]
console.log(pops.length === 4 ? 'true' : 'false');

const percOfPops = [percentageOfWorld1(pops[0]), percentageOfWorld1(pops[1]), percentageOfWorld1(pops[2]), percentageOfWorld1(pops[3])];
console.log(percOfPops);

const ArmeniaNeighbors = ['Turkey', 'Azerbaijan', 'Georgia', 'Iran'];
const newNeighbor = ArmeniaNeighbors.push('Utopia');
console.log(ArmeniaNeighbors);
const lostNeighbor = ArmeniaNeighbors.pop();
console.log(ArmeniaNeighbors);
if (ArmeniaNeighbors.includes('Germany')){
    console.log(`Armenia and Germany are neighbors`);
} else {
    console.log(`Armenia and Germany aren't neighbors`);
};
ArmeniaNeighbors[1] = 'xer';
console.log(ArmeniaNeighbors);

const myCountry = {
    country: 'Armenia',
    capital: 'Yerevan',
    language: 'Armenian',
    population: 2.96,
    neighbours: ['Turkey', 'Azerbaijan', 'Georgia', 'Iran'],
    describe:function(){
        console.log(`${this.country} has ${this.population}million ${this.language} speaking people,
        ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);   
    },
    checkIsIsland:function(){
        const isIsland = this.neighbours.length === 0 ? true : false;
        console.log(isIsland);
        return;
    },
};
myCountry.checkIsIsland();
myCountry.describe();
// Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki
console.log(`${myCountry.country} has ${myCountry.population}million ${myCountry.language} speaking people,
${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population = myCountry.population + 2;
console.log(myCountry.population);

myCountry['population'] = myCountry.population - 2;
console.log(myCountry.population);
*/






