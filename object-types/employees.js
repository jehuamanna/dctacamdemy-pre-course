var employees = [
    {
        name: "Vinay",
        department: "Sales"
    },
    {
        name: "Sarosh",
        department: "Hr"
    },
    {
        name: "Joshi",
        department: "Sales"
    },
    {
        name: "Praveen",
        department: "Hr"
    }
];

console.log("Employees from Hr department");

employees.forEach(function(employee){
    if(employee.department === "Hr")
        console.log(employee.name)
});

console.log("Employees from Sales department");

employees.forEach(function(employee){
    if(employee.department === "Sales")
        console.log(employee.name)
});