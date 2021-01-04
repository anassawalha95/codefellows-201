'use strict'
let q1, q2, q3, q4, q5, username, d = document, conter = 0, flag = true;


function closeMessageDialog() {
    username = prompt("What is your name?")
    d.getElementById('box').style.display = "none";
    d.getElementById('welcoming-user').innerHTML = "Welcome," + username;

    if (flag)
        setTimeout(questions, 1000)
}
function questions() {
    flag = false;


    q1 = prompt("Do I like people who talks too much?")
    q1 = q1.toLocaleLowerCase();
    if (questionsValdation(q1) == true && (q1 == "yes" || q1 == "y")) {
        alert("Correct ! ");
        //console.log("Question Number 1 correct")
        conter++;
    } else {
        alert("False !!")
    }


    q2 = prompt("Did I go to USA ?")
    q2 = q2.toLocaleLowerCase();
    if (questionsValdation(q2) == true && (q2 == "yes" || q2 == "y")) {
        alert("Correct ! ");
        //console.log("Question Number 2 correct")
        conter++;
    } else {
        alert("False !!")
    }

    q3 = prompt("Do I hate design  ?")
    q3 = q3.toLocaleLowerCase();
    if (questionsValdation(q3) == true && (q3 == "no" || q3 == "n")) {
        alert("Correct ! ");
        // console.log("Question Number 3 correct")
        conter++;
    } else {
        alert("False !!")
    }

    q4 = prompt("Can I build big project?")
    q4 = q4.toLocaleLowerCase();
    if (questionsValdation(q4) == true && (q4 == "yes" || q4 == "y")) {
        alert("Correct ! ");
        conter++;
        // console.log("Question Number 4 correct")
    } else {
        alert("False !!")
    }

    q5 = prompt("Do I Smoke ?")
    q5 = q5.toLocaleLowerCase();
    if (questionsValdation(q5) == true && (q5 == "no" || q5 == "n")) {
        alert("Correct ! ");
        conter++;
        //console.log("Question Number 5 correct")
    }
    else {
        alert("False !!")
    }

    d.getElementById('box').style.display = "block";
    d.getElementById('close').style.display = "block";

    d.getElementById('box-text').innerHTML = "Welcome " + username + " you got " + conter + " out of 5";




}


function questionsValdation(answer) {

    if (answer === "yes" || answer === "y" || answer === "no" || answer === "n") {
        return true;

    }
    else {
        alert("You didn't enter yes/no")
    }

}
