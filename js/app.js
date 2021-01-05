'use strict'
let q1, q2, q3, q4, q5, q6, q7, username, d = document, conter = 0, flag = true, gussing_number_counter = 5, askUser = true, colors = ["yellow", "green", "red"];


function closeMessageDialog() {

    username = prompt("What is your name?")
    d.getElementById('box').style.display = "none";
    d.getElementById('welcoming-user').innerHTML = "Welcome," + username;

    if (flag)
        setTimeout(questions, 1000)
}
function questions() {
    flag = false;


    q1 = prompt("Do I people who talks too much?")
    q1 = q1.toLocaleLowerCase();
    if (questionsValdation(q1) == true && (q1 == "n" || q1 == "no")) {
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



    while (askUser) {
        q6 = prompt("What is my favorite number between 0 & 100 ? attempts: " + gussing_number_counter)



        switch (true) {
            case (q6 == 7):
                alert("correct");
                conter++;
                askUser = false
                break;

            case (q6 == ""):
                alert("Nothing is entered");
                break;
            case (q6 > "20"):
                alert("too High");
                break;
            case (q6 < "0"):
                alert("too low");
                break;
            case (q6 < "20" && q6 > "10"):
                alert("little Close");
                break;
            case (q6 < "10" && q6 > "0"):
                alert("very Close");
                break;


        }

        --gussing_number_counter;

        if (gussing_number_counter == 0) {
            alert("You ran out of attempts The correct answer is 7!!");
            break;
        }

    }
    askUser = true;
    gussing_number_counter = 6;

    while (askUser) {
        q7 = prompt("What is my favorite color red, purple, green, yellow, black, white  ? attempts: " + gussing_number_counter)

        for (var index = 0; index < colors.length; index++) {

            if (q7 == colors[index]) {
                alert("correct the answers is yellow, green, and red !!")
                conter++
                askUser = false
                break;
            }

        }

        --gussing_number_counter;

        if (gussing_number_counter == 0) {
            alert("You ran out of attempts The correct answers is yellow, green, and red!!");
            break;
        }
    }

    d.getElementById('box').style.display = "block";
    d.getElementById('close').style.display = "block";
    alert(" you got " + conter + " out of 7");
    d.getElementById('box-text').innerHTML = "Welcome " + username + " you got " + conter + " out of 7";




}


function questionsValdation(answer) {

    if (answer === "yes" || answer === "y" || answer === "no" || answer === "n") {
        return true;

    }
    else {
        alert("You didn't enter yes/no")
    }

}