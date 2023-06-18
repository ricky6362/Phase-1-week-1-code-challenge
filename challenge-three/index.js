// Net salary program

// Storing the salary to calculated its net salary
const userSalary = window.prompt("Enter your salary as values from (0 and above) ");

// Creating a function that accepts the gross salary as input and outputs the net salary
function calculateNetSalary(salary){
    // Creating a condition for when the value is a number greater than 0
    if(salary >= 0 && salary < Infinity){
        // Calculating payee tax function
        function calculatePayee(salary){

            if (salary > 0 && salary <= 24000){
                let payeeTax = salary / 10
                window.alert(`Payee tax: ${payeeTax}`);
                return payeeTax
            } else if (salary >= 24001 && salary <= 32333){
                let payeeTax = salary / 20
                window.alert(`Payee tax: ${payeeTax}`);
                return payeeTax
            } else if (salary > 32333){
                let payeeTax = salary / 30
                window.alert(`Payee tax: ${payeeTax}`);
                return payeeTax
            }
        }

        // Calculating nhif funds tax
        function calculateNhifTax(salary){
            if(salary > 0 && salary <= 5999){
                window.alert(`NHIF tax: ${150}`);
                return 150
            } else if(salary > 5999 && salary <= 7999){
                window.alert(`NHIF tax: ${300}`);
                return 300
            } else if(salary > 7999 && salary <= 11999){
                window.alert(`NHIF tax: ${400}`);
                return 400
            } else if(salary > 11999 && salary <= 14999){
                window.alert(`NHIF tax: ${500}`);
                return 500
            } else if(salary > 14999 && salary <= 19999){
                window.alert(`NHIF tax: ${600}`);
                return 600
            } else if(salary > 19999 && salary <= 24999){
                window.alert(`NHIF tax: ${750}`);
                return 750
            } else if(salary > 24999 && salary <= 29999){
                window.alert(`NHIF tax: ${850}`);
                return 850
            } else if(salary > 29999 && salary <= 34999){
                window.alert(`NHIF tax: ${900}`);
                return 900
            } else if(salary > 34999 && salary <= 39999){
                window.alert(`NHIF tax: ${950}`);
                return 950
            } else if(salary > 39999 && salary <= 44999){
                window.alert(`NHIF tax: ${1000}`);
                return 1000
            } else if(salary > 44999 && salary <= 49999){
                window.alert(`NHIF tax: ${1100}`);
                return 1100
            } else if(salary > 49999 && salary <= 59999){
                window.alert(`NHIF tax: ${1200}`);
                return 1200
            } else if(salary > 59999 && salary <= 69999){
                window.alert(`NHIF tax: ${1300}`);
                return 1300
            } else if(salary > 69999 && salary <= 79999){
                window.alert(`NHIF tax: ${1400}`);
                return 1400
            } else if(salary > 79999 && salary <= 89999){
                window.alert(`NHIF tax: ${1500}`);
                return 1500
            } else if(salary > 89999 && salary <= 99999){
                window.alert(`NHIF tax: ${1600}`);
                return 1600
            } else {
                window.alert(`NHIF tax: ${1700}`);
                return 1700
            }
        }

        // calculate net salary (gross - (nhif + payee))
        function finalSalary(userSalary) {
            let payee = calculatePayee(userSalary);
            let nhifTax = calculateNhifTax(userSalary);
            let netSalary = userSalary - (parseFloat(payee) + parseFloat(nhifTax));
            window.alert(`Your net salary is: ${netSalary}`);
          }
        //  Invoking the function
        finalSalary(userSalary)
    } else {
        window.alert("Enter a value from 0 and above");
    }
    document.write("Reload the page to get new results")
}
// Invoking the function
calculateNetSalary(userSalary)

