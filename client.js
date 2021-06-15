const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

function Employee(employee, bonusPercentage){
  this.name = employee.name;
  this.bonusPercentage = bonusPercentage;
  this.totalBonus = parseInt(employee.annualSalary) * bonusPercentage;
  this.totalCompensation = parseInt(employee.annualSalary) + this.totalBonus;
}

function bonusCalculator(array){
  let bonusArray = [];
    for(let employee of array){
      if(employee.reviewRating <= 2){
        bonusArray.push(new Employee(employee, 0));
      } else if (employee.reviewRating === 3){
        bonusArray.push(new Employee(employee, .04));
      } else if (employee.reviewRating === 4){
        bonusArray.push(new Employee(employee, .06));
      } else if (employee.reviewRating === 5){
        bonusArray.push(new Employee(employee, .1));
    } return bonusArray;
  }
}

console.log(bonusCalculator(employees));