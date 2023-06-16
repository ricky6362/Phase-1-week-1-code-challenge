// write a program that takes car speed as input
// Taking the speed input value and storing it in a variable speed
const speed = window.prompt("Enter your speed: (value should be a number");

// Cretaing a function that takes the speed as parameter and returns the demerit message and points if there is any 
function mySpeedInfo(speed){
    // Creating an if statement checking if speed ranges from 0 and above
    if(speed >= 0 ){
        // Nested if statement to print out the demerit message and any points
        if(speed < 70 && speed < 134){
            window.alert("Ok.")
        } else if(speed >=75 && speed <= 79){
            window.alert("Points: 1")
        } else if(speed >= 80 && speed <= 84){
            window.alert("Points: 2")
        } else if(speed >=85 && speed <= 89){
            window.alert("Points: 3")
        } else if(speed >= 90 && speed <= 94){
            window.alert("Points: 4")
        } else if(speed >= 95 && speed <= 99){
            window.alert("Points: 5")
        } else if(speed >= 100 && speed <= 104){
            window.alert("Points: 6")
        } else if(speed >= 105 && speed <= 109){
            window.alert("Points: 7")
        } else if(speed >= 110 && speed <= 114){
            window.alert("Points: 8")
        } else if(speed >= 115 && speed <= 119){
            window.alert("Points: 9")
        } else if(speed >= 120 && speed <= 124){
            window.alert("Points: 10")
        } else if(speed >=125 && speed <= 129){
            window.alert("Points: 11")
        } else if(speed >=130 && speed <= 134){
            window.alert("Points: 11")
        } else {
            window.alert("License Suspended.")
        }
        // alternate statement if speed value is less than 0 or not a number 
    }  else {
        window.alert("Make sure your speed is a number from 0 and above")
    }
    // Additional info on how the user should get new output values  after inserting their initial value
    document.write("Reload to view your new speed details")
}

// Invoking the mySpeedInfo function to output the demerit message and poits or the alternate statement that returns if speed is less than 0
mySpeedInfo(speed)