//question object. 
//Update this each time a question is added
var questions = {
    // question arrays
    questions: [
        "What is the name of Keanu Reeves's character in the Matrix trilogy",
        "Who directed the Matrix Trilogy?",
        "What is the name of the hobit played by Elijah Wood in the Lord of the Rings movie",
        "What is the name of James T. Kirk's spaceship in Star Trek",
        "How many engines are on an X-wing Fighter",
        "who is Luke and Leia's mother",
        "In the movie 'the Wizard of Oz', what did the Scarecrow want from the wizard"
    ],

    // answer array for question 1
    q1Answer: [
        "Neo", //a
        "Morpheus",
        "Agent Smith",
        "Keanu was not in this movie"
    ],
    // answer array for question 2
    q2Answer: [
        "John Cena",
        "The Wachowski Brothers", //b
        "No one, the matrix is real",
        "Quentin Tarantino"
    ],
    q3Answer: [
        "YOU SHALL NOT PASS!",
        "Samwise Gamgee",
        "Legolas",
        "Frodo Baggins"
    ], //d
    q4Answer: [
        "The Enterprise", //a
        "Millanium Falcon",
        "Space Hulk",
        "He has a ship?"
    ],
    q5Answer: [
        "1", 
        "3",
        "6",
        "4" //d
    ],
    q6Answer: [
        "Rey",
        "Padme",
        "Supreme Leader Snoke",
        "Amilyn Holdo"
    ],
    q7Answer: [
        "Brain",
        "Heart", //b
        "Legs",
        "Wings"
    ]

}

//Name for radio buttons array to prevent multiple clicking on answer
//Update this each time a question is added
var nameArray = [
    "q1",
    "q2",
    "q3",
    "q4",
    "q5",
    "q6",
    "q7"
]
//correct answer array. record correct answer in order here
//Update this each time a question is added
var correctAnswers = [
    "a",
    "b",
    "d",
    "a",
    "d",
    "b",
    "b"
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
//timer for the game:
var time = 60; //60 seconds
//variable that hold interval
var intervalId;

//when start is clicked, create question, submit buttons, and start timer
$(".startButton").on("click", function () {

    //function to create question when start is clicked
    function createQuestions() {
        for (var i = 0; i < questions.questions.length; i++) {

            // console.log(questions.questions[i])

            $("#formBody").append(`<div class="question"><h3>${questions.questions[i]}</h3><div>`)

            // console.log(nameArray[i])

            for (var k = 0; k < 4; k++) {
                var placeHolder = Object.values(questions)[i + 1][k];

                // console.log(Object.values(questions)[i + 1][k])

                $("#formBody").append(`<span><label><input type="radio" name="${nameArray[i]}"value="${answerValues[k]}"/>${placeHolder}</label></span>`)
            }
            // console.log("------------------")
        }
    }

    createQuestions()

    //function to create submit button in place of start button
    function createSubmit() {
        $("#submit").empty();
        $("#submit").html(`<input type="submit" value="Submit">`)
    }
    createSubmit();
    $("#timeRemaining").html("<h2>01:00</h2>");
    start();
})
//get value from checked answer when clicked on submit button
function submitAnswer() {
    $("#timeRemaining").empty();
    clearInterval(intervalId);
    $("#submit").html("<h2>Please reload the page to try again</h2>");

    for (var i = 0; i < nameArray.length; i++) {
        //cycle through the array to get the name for each respective answer group
        var selected = document.getElementsByName(nameArray[i]);

        // console.log(selected)

        //go through each answer for each question and checked to see if an answer was selected
        for (var k = 0; k < 4; k++) {
            if (selected[k].checked) {
                // push values to a place holder array to check answer
                checkedAnswer.push(selected[k].value)
            }
        }
        //check answer using the array created
        if (checkedAnswer[i] === correctAnswers[i]) {
            scoreCount++;
        }
    }
    $("#formBody").html(`<h2>You are finished!!</h2><h2>Your score is:${scoreCount} out of ${correctAnswers.length}</h2>`)

}


//start timer as soon as start is pressed
function start() {
    //only run the code if the clock is not running
    intervalId = setInterval(count, 1000);
}

//function to decrease timer and push to html
function count() {
    time--
    //  TODO: Get the current time, pass that into the timeConverter function,
    //        and save the result in a variable.
    var timeConverted = timeConverter(time)
    //  TODO: Use the variable created to show the converted time in the "display" div.
    $("#timeRemaining").html(`<h2>${timeConverted}</h2>`)
    if (time === 0) {
        submitAnswer();
    }
}

//function to convert time into minutes format:
function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
}



$(document).on("click", "#submit", submitAnswer)