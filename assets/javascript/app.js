
//question object. 
var questions = {
    questions: ["question 1", "question 2", "question 3", "question 4"],
    q1Answer: ["answer 1" , "answer 2", "answer 3", "answer 4"],
    q2Answer: ["answer a" , "answer b", "answer c", "answer d"],
    q3Answer: ["answer e" , "answer f", "answer g", "answer h"],
    q4Answer: ["answer z" , "answer x", "answer c", "answer v"]
}

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


function createQuestions() {
    for (var i = 0; i < questions.questions.length; i++ ){
        console.log(questions.questions[i])
        console.log(Object.values(questions)[i+1])
        console.log("------------------")
    }
}

createQuestions()