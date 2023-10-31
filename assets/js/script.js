var startButton = document.querySelector('#start-btn')
var questionsContainer = document.querySelector('#question-container')
var resultContainer = document.querySelector ('#result-container')
var questionElement  = document.querySelector('#questions')
// var intialsInput =  document.querySelector('#')
var submitButton = document.querySelector('#submit-btn')


var QuestionIndex = 0;
var score = 0;
var timeLeft = 60;

var questions = [
    // Add questions here
 {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings","booleans","alerts","numbers"],
    answer: "alerts"
 },
 {
    question: "Example 2",
    choices: ["Choice1","Choice2"],
    answer: "Choice2"
 }     
];




function setNextQuestion() {
 
}

function checkAnswer(answer) {
   
}

function startTimer() {
  
}

function saveScore() {
    
}


    questions[0] = {
     question: "Example 1",
    choices: ["Choice1","Choice2"],
      answer: "Choice2"  
     }
    
    question_paragraph.innerHTML=questions[0].question
   let choices=questions[0].choices
    let buttonDiv = document.createElement('div')
   for(let i=0; i<choices.length; i++){
    let choices_button = document.createElement('button') 
    choices_button.innerHTML=choices[i]
    buttonDiv.append(choices_button)
}

var div=document.getElementById('quiz-container')
var display= 0;

function startQuiz() {
    if (display == 1) 
    {
        div.style.display = 'block';
        display = 0;
    }
    else {
        div.style.display = 'none';
        display = 1;
    }
}




// function startQuiz() {
//     document.getElementById('quiz-container')
//     let question_paragraph= document.createElement('p')
//     var display = 0;
// document.getElementById('question-container').append(question_paragraph, buttonDiv) 

  



startButton.addEventListener('click', startQuiz);
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

