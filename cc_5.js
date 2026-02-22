//step 2
const employees = [
    {
        name: "Aiden",
        hoursWorked: 25,
        hourlyRate: 15
    },
    {
        name: "Rj",
        hoursWorked: 45,
        hourlyRate: 20
    }, 
    {
        name: "Alex",
        hoursWorked: 35,
        hourlyRate: 18
    }
];

//step 3
function calculateBasePay(rate, hours) {
    const regularHours = Math.min(hours, 40);
    return regularHours * rate;
}

//step 4
function calculateOvertimePay(rate, hours) {
    const overtimeHours = Math.max(hours-40, 0);
    return overtimeHours * rate * 1.5;
}

//step 5
function calculateTaxes(grossPay) {
    return grossPay * 0.15;
}

//step 6
function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;

    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };
}

//step 7
employees.forEach(employee => {
    const payroll = processPayroll(employee);
    
    console.log(`Employee: ${payroll.name}`);
    console.log(`Base Pay: $${payroll.basePay.toFixed(2)}`);
    console.log(`Overtime Pay: $${payroll.overtimePay.toFixed(2)}`);
    console.log(`Gross Pay: $${payroll.grossPay.toFixed(2)}`);
    console.log(`Net Pay: $${payroll.netPay.toFixed(2)}`);
});