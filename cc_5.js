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

