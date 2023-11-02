var startButton = document.querySelector('#start-btn')
var questionsContainer = document.querySelector('#question-container')
var resultContainer = document.querySelector('#result-container')
var questionElement = document.querySelector('#questions')
var answers = document.querySelector('#answers-container')
var submitButton = document.querySelector('#submit-btn')
var quizcontainer = document.querySelector('#quiz-container')
var timerElement = document.getElementById('timer');

var QuestionIndex = 0;
var score = 0;
var timeLeft = 30;
var timeInterval;
var questions = [
    
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        question: "What does DOM stand for in JavaScript?",
        choices: ["Document Object Model", "Data Object Mode", "Dynamic Object Method", "Document Oriented Module"],
        answer: "Document Object Model"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        choices: ["var", "int", "variable", "v"],
        answer: "var"
    },
    {
        question: "What is the result of the expression 5 == '5' in JavaScript?",
        choices: ["true", "false", "undefined", "error"],
        answer: "true"
    }

];




function setNextQuestion() {
    var currentQuestion = questions[QuestionIndex]
    questionElement.innerHTML= currentQuestion.question;
    // questionElement.textContent = currentQuestion.question
    answers.innerHTML="";

    for (i = 0; i < currentQuestion.choices.length; i++) {
        var currentanswer = currentQuestion.choices[i]
        var questionbtn = document.createElement("button")
        questionbtn.textContent = currentanswer
        answers.append(questionbtn)
        questionbtn.addEventListener("click", checkAnswer)

    }

}

function checkAnswer(event) {
    console.log(event.target)
    var selectedAnswer = event.target.textContent;
    var currentQuestion = questions[QuestionIndex];
    var feedbackElement= document.createElement("p")
    if (selectedAnswer === currentQuestion.answer) {
        score++;
        feedbackElement.textContent="Correct!";
    } else{
        feedbackElement.textContent="Wrong!"
    }

    QuestionIndex++;

    if (QuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        endQuiz();
    }

    answers.append(feedbackElement);
}
    

function startTimer() {
    timeInterval = setInterval(function (){
        timeLeft--;
        console.log("Time left: " + timeLeft + " seconds");
        timerElement.textContent = timeLeft; 


        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000); 

    }


function highscore() {

}

function initials(){

}


function startQuiz() {
    quizcontainer.classList.toggle("hidden")
    questionsContainer.classList.toggle("hidden")
    setNextQuestion();
    startTimer();
}

function endQuiz() {
    clearInterval(timeInterval);
    resultContainer.textContent = "Your Score: " + score;
    questionsContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    highscore();
    initials();
}

startButton.addEventListener('click', startQuiz);

// function startQuiz() {
//     document.getElementById('quiz-container')
//     let question_paragraph= document.createElement('p')
//     var display = 0;
// document.getElementById('question-container').append(question_paragraph, buttonDiv)

// submitButton.addEventListener('click', saveScore);

//objects and arrays
// let nameArray = ["A","B","C"] --> nameArray[1]
// let testObj = {
//     name1: "A",
//     name2: "B"
// }
// testObj.name1

// let arrObj = [
//     {

//     },
//     {

//     }
// ]


// questions[0] = {
//     question: "Example 1",
//     choices: ["Choice1", "Choice2"],
//     answer: "Choice2"
// }

// question_paragraph.innerHTML = questions[0].question
// let choices = questions[0].choices
// let buttonDiv = document.createElement('div')
// for (let i = 0; i < choices.length; i++) {
//     let choices_button = document.createElement('button')
//     choices_button.innerHTML = choices[i]
//     buttonDiv.append(choices_button)
// }
