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
    return 0
    }
}


// Step 4
function calculateOvertimePay(hourlyRate, hoursWorked) {
    if (hoursWorked > 40) {
    return (hourlyRate * 1.5);
    } else {
    return 0;
    }
} 


// Step 5
function calculateTaxes(grossPay) {
    netPay = grossPay * (1 - 0.15)
    return netPay.toFixed(2)
}


// Step 6
function processPayroll(employee) {
    basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    grossPay = basePay + overtimePay;
    netPay = calculateTaxes(grossPay);

    let employeePayroll = {
        name: employee.name, 
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay,
    }

    return employeePayroll;

}

// Step 7
    employees.forEach(employee => {let employeePayroll = processPayroll(employee); console.log(`Employee name: ${employeePayroll.name} |`, 
        `Base Pay: $${employeePayroll.basePay} |`, `Overtime Pay: $${employeePayroll.overtimePay} |`, `Gross Pay: $${employeePayroll.grossPay} |`, `Net Pay: $${employeePayroll.netPay}`)});