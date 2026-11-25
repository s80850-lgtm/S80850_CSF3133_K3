// ==========================================
// ERROR LIST (Part 1: Find and Fix the Errors)
// ==========================================

// Error 1 (grade.html, Line 9):
// Missing return before checkMark().
// Correction: onsubmit="return checkMark()"

// Error 2 (grade.html, Line 17):
// Function name showtable() has incorrect capitalization.
// Correction: showTable()

// Error 3 (grade.html, Line 19):
// Incorrect JavaScript filename grades.js.
// Correction: grade.js

// Error 4 (grade.js, Line 5):
// Assignment operator (=) was used instead of comparison (===).
// Correction: name === ""

// Error 5 (grade.js, Line 9):
// Incorrect function name isNan().
// Correction: isNaN()

// Error 6 (grade.js, Line 14):
// Incorrect logical operator &&.
// Correction: ||

// Error 7 (grade.js, Line 28):
// Incorrect method capitalization getElementByID().
// Correction: getElementById()

// Error 8 (grade.js, Line 30):
// Incorrect CSS property colour.
// Correction: color

// Error 9 (grade.js, Line 38):
// Loop starts at 1 and skips the first grade.
// Correction: i = 0

// Error 10 (grade.js, Line 42):
// Incorrect property innerHtml.
// Correction: innerHTML


// ==========================================
// Function 1: Check Student Mark
// ==========================================

function checkMark() {

    // Get the student's name and mark
    let name = document.forms["gradeForm"]["name"].value;
    let mark = document.forms["gradeForm"]["mark"].value;

    // Check whether the name is empty
    if (name.trim() === "") {
        alert("Name must be filled out.");
        return false;
    }

    // Check whether the mark is empty
    if (mark.trim() === "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    // Check whether the mark is a valid number
    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    // Convert mark into a number
    mark = parseFloat(mark);

    // Check whether the mark is between 0 and 100
    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    // Declare grade variable
    let grade;

    // Determine the student's grade
    if (mark >= 80) {

        grade = "A";

    } else if (mark >= 65) {

        grade = "B";

    } else if (mark >= 50) {

        grade = "C";

    } else {

        grade = "F";

    }

    // Display student's result
    document.getElementById("result").innerHTML =
        name + " got grade " + grade;

    // Change result colour according to grade
    if (grade === "A" || grade === "B") {

        document.getElementById("result").style.color = "green";

    } else if (grade === "C") {

        document.getElementById("result").style.color = "orange";

    } else {

        document.getElementById("result").style.color = "red";

    }

    // Display the date and time when the grade was checked
    document.getElementById("checkTime").innerHTML =
        "Checked on: " + new Date();

    // Prevent the page from refreshing
    return false;

}


// ==========================================
// Function 2: Show Grade Table
// ==========================================

function showTable() {

    // Store all grades in an array
    let grades = ["A", "B", "C", "F"];

    // Store mark ranges in an array
    let ranges = ["80-100", "65-79", "50-64", "0-49"];

    // Create the table heading
    let tableHTML = "<table>";

    tableHTML += "<tr>";
    tableHTML += "<th>Grade</th>";
    tableHTML += "<th>Mark Range</th>";
    tableHTML += "</tr>";

    // Use a for loop to display all grades
    for (let i = 0; i < grades.length; i++) {

        tableHTML += "<tr>";

        tableHTML += "<td>" + grades[i] + "</td>";

        tableHTML += "<td>" + ranges[i] + "</td>";

        tableHTML += "</tr>";

    }

    // Close the table
    tableHTML += "</table>";

    // Display the table on the webpage
    document.getElementById("tableContainer").innerHTML =
        tableHTML;

}


// ==========================================
// Function 3: Generate Random Mark
// ==========================================

function randomMark() {

    // Generate a random whole number from 0 to 100
    let randomNumber = Math.floor(Math.random() * 101);

    // Put the random number into the mark input field
    document.getElementById("mark").value = randomNumber;

}
