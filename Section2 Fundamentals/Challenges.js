'use strict'

/*    
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const KoalasAverage = calcAverage(85, 54, 41);
const DolphinsAverage = calcAverage(23, 34, 27);

const checkWinner = function(KoalasAverage, DolphinsAverage){
    if(KoalasAverage >= DolphinsAverage * 2){
        console.log(`Koalas Win! ${KoalasAverage} - ${DolphinsAverage}`);
    } else if(DolphinsAverage >= KoalasAverage * 2){
        console.log(`Dolphins Win! ${DolphinsAverage} - ${KoalasAverage}`);
    } else {
        console.log(`no team wins sowwy`);
    }
}
checkWinner(DolphinsAverage, KoalasAverage);
//Workslikeacharm
*/ 

/*
const calcTip = function(bill){
    const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
    console.log(`Your bill $${bill}
    tip $${tip}
    Total value $${bill + tip}.`);
}
calcTip(100);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
//gudgud
*/

/*
//BMI = mass / height ** 2 = mass / (height * height) 
const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};
const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;        
    },
};
// Functions need to be called to calculate!!
Mark.calcBMI();
John.calcBMI();

if(Mark.bmi > John.bmi){
    console.log(`${Mark.fullName}'s BMI (${Mark.bmi})
    is higher than ${John.fullName}'s (${John.bmi})`);
} else if (John.bmi > Mark.bmi){
    console.log(`${John.fullName}'s BMI (${John.bmi})
    is higher than ${Mark.fullName}'s (${Mark.bmi})`);
} 
*/

/*
const calcTip = function(bill){
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for(let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(tip + bills[i]);
    calcTip(bills[i]);
}
console.log(bills);
console.log(tips);
console.log(total);

const calcAverage = function(arr){
    let sum = 0; 
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        // sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length;
}
console.log(calcAverage(total));
*/