// Coding Challenge 05

// Step 2
let employees = 
    [{name: 'Lucinda', hourlyRate: 15.95, hoursWorked: 38},
    {name: 'Max', hourlyRate: 24.72, hoursWorked: 42},
    {name: 'Elvira', hourlyRate: 13.00, hoursWorked: 40},]

// Step 3
function calculateBasePay(hourlyRate, hoursWorked) {
    if (hoursWorked <= 40) {
    return (hourlyRate * hoursWorked);
    } else {
    console.log('Base pay cannot be calculated if worked over 40 hours.');
    }
}

console.log(calculateBasePay(employees[2].hourlyRate, employees[2].hoursWorked));


// Step 4
function calculateOvertimePay(hourlyRate, hoursWorked) {
    if (hoursWorked > 40) {
    return (hourlyRate * 1.5);
    } else {
    console.log('Overtime pay cannot be calculated if worked under 40 hours.');
    }
} 

console.log(calculateOvertimePay(employees[0].hourlyRate, employees[0].hoursWorked));

