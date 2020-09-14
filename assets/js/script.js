console.log(questions);

var displayQuestionEl = document.querySelector(".display-questions");
var timerEl = document.querySelector(".timer");
var resultsEl = document.querySelector(".results");

var mainDisplay = document.createElement("h3");
var startBtn = document.createElement("button");
var timer = 75;
var index = 0;

function openingPage() {
    mainDisplay.textContent = "Press the button to start"
    startBtn.textContent = "Start"
    displayQuestionEl.append(mainDisplay, startBtn)
}

function startQuiz() {
    showTimer()
    nextQuestion()
}

function showTimer(){
    timerEl.textContent = timer;
    var questionTimer = setInterval(function(){
        timer--
        timerEl.textContent = timer;
        if (timer <= 0) {
            clearInterval(questionTimer);
        }
    }, 1 * 1000)
}

function nextQuestion() {

    var currentQuestion = questions[index];
    console.log(currentQuestion);
    displayQuestionEl.textContent = "";
    mainDisplay.textContent = currentQuestion.title;
    displayQuestionEl.append(mainDisplay);
    var choicesContainer = document.createElement("div");
    for (let index = 0; index < currentQuestion.choices.length; index++) {
        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = currentQuestion.choices[index];
        choiceBtn.addEventListener("click", checkAnswer);
        choicesContainer.append(choiceBtn);            
    }
    displayQuestionEl.append(choicesContainer);
}

function checkAnswer(event) {
    var responseText = event.target.textContent;
    console.log(responseText);
    if (responseText === questions[index].answer) {
        console.log("Correct");
    } else {
        console.log("Incorrect");
    }
    
    index++
    nextQuestion();
}
startBtn.addEventListener("click", startQuiz)
openingPage();