//question object. 
var questions = {
    questions: ["question 1", "question 2", "question 3", "question 4"],
    q1Answer: ["answer 1", "answer 2", "answer 3", "answer 4"],
    q2Answer: ["answer a", "answer b", "answer c", "answer d"],
    q3Answer: ["answer e", "answer f", "answer g", "answer h"],
    q4Answer: ["answer z", "answer x", "answer c", "answer v"]
}

//Name for radio buttons array to prevent multiple clicking on answer
var nameArray = [
    "q1",
    "q2",
    "q3",
    "q4"
]
//q1Answer. correct answer array
var correctAnswers = [
    "a",
    "b",
    "b",
    "c"
]

//values to be assigned
var answerValues = [
    "a",
    "b",
    "c",
    "d"
]

//empty array for storing checked answer:
var checkedAnswer = [];
//score count:
var scoreCount = 0;
//make sure the submit button can only be clicked once. until reset

function createQuestions() {
    for (var i = 0; i < questions.questions.length; i++) {
        console.log(questions.questions[i])
        $("#forms").append(`<div>${questions.questions[i]}<div>`)
        console.log(nameArray[i])
        for (var k = 0; k < 4; k++) {
            var placeHolder = Object.values(questions)[i + 1][k];
            console.log(Object.values(questions)[i + 1][k])
            $("#forms").append(`<label><input type="radio" name="${nameArray[i]}"value="${answerValues[k]}"/>${placeHolder}</label>`)
        }
        console.log("------------------")


    }
}

createQuestions()

//get value from checked answer when clicked on submit button

function submitAnswer() {
    for (var i = 0; i < nameArray.length; i++) {

        
        //cycle through the array to get the name for each respective answer group
        var selected = document.getElementsByName(nameArray[i]);
        console.log(selected)
        for (var k = 0; k < nameArray.length; k++) {
            if (selected[k].checked) {
                // console.log(selected[k].value)
                checkedAnswer.push(selected[k].value)
            }
        }
        // console.log(correctAnswers)
        // for (var i = 0; i < correctAnswers.length; i++)
        if (checkedAnswer[i] === correctAnswers[i]) {
            scoreCount++;
        }
    }

    
    //return scoreCount
    console.log(scoreCount)
}


$(document).on("click", "#submit", submitAnswer)