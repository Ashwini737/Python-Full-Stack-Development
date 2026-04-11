// GRADE CALCULATOR
function calculateGrade() {
    let name = document.getElementById("studentName").value;
    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);
    let m4 = Number(document.getElementById("m4").value);
    let m5 = Number(document.getElementById("m5").value);
    let marks = [m1, m2, m3, m4, m5];
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    let average = total / marks.length;
    let grade;
    if (average >= 90) grade = "A+";
    else if (average >= 75) grade = "A";
    else if (average >= 60) grade = "B";
    else if (average >= 50) grade = "C";
    else grade = "Fail";
    document.getElementById("gradeResult").innerHTML =
        "Name: " + name +
        "<br>Total: " + total +
        "<br>Average: " + average.toFixed(2) +
        "<br>Grade: " + grade;
}
function resetGrade() {
    document.getElementById("gradeResult").innerHTML = "";
}
// PALINDROME
function checkPalindrome() {
    let word = document.getElementById("palWord").value;
    let correctWord = word.toLowerCase();
    let reversed = "";
    for (let i = correctWord.length - 1; i >= 0; i--) {
        reversed += correctWord[i];
    }
    let result;
    if (correctWord === reversed) {
        result = "Yes, It is Palindrome";
    } else {
        result = "No, It is not Palindrome";
    }
    document.getElementById("palResult").innerHTML =
        "Word: " + word +
        "<br>Character Count: " + word.length +
        "<br>Reversed: " + reversed +
        "<br>Result: " + result;
}
// NUMBER ANALYZER
function analyzeNumber() {
    let num = Number(document.getElementById("numInput").value);
    let result = "";
    result += (num % 2 == 0) ? "Even<br>" : "Odd<br>";
    if (num > 0) result += "Positive<br>";
    else if (num < 0) result += "Negative<br>";
    else result += "Zero<br>";
    result += "<br><strong>Numbers:</strong><br>";
    for (let i = 1; i <= num; i++) {
        result += i + " ";
    }
    document.getElementById("numResult").innerHTML = result;
}
// LOGIN
function validateLogin() {
    const correctUser = "admin";
    const correctPass = "12345";
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user === correctUser && pass === correctPass) {
        document.getElementById("loginResult").innerHTML = "Login Successful...!! ";
    } else {
        document.getElementById("loginResult").innerHTML = "Invalid Credentials...!! ";
    }
}
function resetLogin() {
    document.getElementById("loginResult").innerHTML = "";
}
function toggleMode() {
    let body = document.body;
    let button = document.getElementById("modeBtn");
    if (body.className === "dark") {
        body.className = "";
        button.innerHTML = "<b>DARK MODE</b>";
    } else {
        body.className = "dark";
        button.innerHTML = "<b>LIGHT MODE</b>";
    }
}