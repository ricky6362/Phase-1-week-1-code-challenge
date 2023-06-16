// Program prompting user to input student marks
// Getting the marks input from the user and storing it in studentMarks variable
let studentMarks = window.prompt("Enter your marks (value should be from 0 - 100)");

// Creating a function that takes the studentMarks as the parameter and returns the required output with the grades and range
function tellMarksAndGrade(studentMarks){
    // Conditional statement if value is ranging from 0 - 100
    if(studentMarks >= 0 && studentMarks <= 100){
        // Nested conditional statement for if the user has entered a value ranging from (0-100)
        if(studentMarks < 40){
            window.alert(`E > less 40`)
        } else if(studentMarks >= 40 && studentMarks < 50){
            window.alert(`D > 40 to 49`)
        } else if(studentMarks >= 50 && studentMarks < 60){
            window.alert(`C > 50 to 59`)
        } else if(studentMarks >= 60 && studentMarks < 80){
            window.alert(`B > 60 to 79`)
        } else {
            window.alert(`A > 79`)
        }

        // alternate info if user does not enter a value from (0-100)
    } else {
        window.alert("Enter your marks and ensure the value is ranging from (0 - 100)");
    }
    // Additional info for any user that wants to run the program again
    document.write("Reload to get a new output value")
}

// Invoking of the tellMarksAndGrade whereby it returns the marks and range and outputs the info to the user
tellMarksAndGrade(studentMarks)
