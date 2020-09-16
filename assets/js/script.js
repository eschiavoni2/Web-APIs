console.log(questions);
// Variables
var displayQuestionEl = document.querySelector(".display-questions");
var timerEl = document.querySelector(".timer");
var resultsEl = document.querySelector(".results");

var mainDisplay = document.createElement("h3");
var startBtn = document.createElement("button");
var timer = 75;
var index = 0;
var questionTimer;
var score = 0;
var highscores = score;
var title = "";
var highscoresInput = document.querySelector("#highscore-text");
var highscoresForm = document.querySelector("#highscores-form");
var highscoresList = document.querySelector("#highscores-list");
var highscoresCount = document.querySelector("#highscores-count");
var highscores = [];

// var initialForm = document.createElement(“form”);
// var form = document.createElement(“input”);

// function that loads content when the page first loads
function openingPage() {
    // add text to h3 element
    mainDisplay.textContent = "Press the button to start"
    // add text to button
    startBtn.textContent = "Start"
    // append text and button to question container
    displayQuestionEl.append(mainDisplay, startBtn)
}

// function that shows the question and starts the timer
function startQuiz() {
    // show timer function
    showTimer()
    // call next question function
    nextQuestion()
}

// Function that handles the timer
function showTimer() {
    // display timer to screen
    timerEl.textContent = timer;
    // create setInterval and store it to variable
    questionTimer = setInterval(function () {
        // decrease timer by 1
        timer--
        // display timer screen
        timerEl.textContent = timer;
        // if timer goes down to 0, clear interval
        if (timer <= 0) {
            clearInterval(questionTimer);
        }
    }, 1 * 1000)
    // Inside setInterval function:
}

// Function tht handles and displays the next question
function nextQuestion() {
    // declare a variable to store current question. Assign the variable
    var currentQuestion = questions[index];
    // console.log current question
    console.log(currentQuestion);
    // empty question container element;
    displayQuestionEl.textContent = "";
    // add current question title to main text display variable
    mainDisplay.textContent = currentQuestion.title;
    // append the main text display variable to the question 
    displayQuestionEl.append(mainDisplay);
    // create a div element to wrap the "choices"
    var choicesContainer = document.createElement("div");
    // use a loop to:
    for (let index = 0; index < currentQuestion.choices.length; index++) {
        var choiceBtn = document.createElement("button");
        // create a button for each choice
        choiceBtn.textContent = currentQuestion.choices[index];
        // add text to each button from question choicies
        choiceBtn.addEventListener("click", checkAnswer);
        // append buttons to the div element created to wrap choices
        choicesContainer.append(choiceBtn);
    }
    // append div element to the question container element
    displayQuestionEl.append(choicesContainer);
}

// Function to check the answer and display to following question
function checkAnswer(event) {
    // use a for loop to:
    var responseText = event.target.textContent;
    console.log(responseText);
    // create if === then correct
    if (responseText === questions[index].answer) {
        console.log("Correct");
        // create else != then incorrect
    } else {
        timer = timer - 15;
        console.log("Incorrect");
    }
    // increase the score
    index++
    // check and see if questions index is undefined, if it is clear timer and show the score

    if (index >= questions.length) {
        clearInterval(questionTimer);
    }
    else {
        // Call function to go next question 
        nextQuestion();
    }
    nextQuestion();
}

function endGame() {






}
// call function high score local storage
init ();

function renderHighscores() {
    highscoresList.innerHTML = "";
    highscoresCount.textContent = highscores.length;
    for (var index = 0; i < highscores.length; index++) {
        var highscore = highscores[index];

        var li = document.createElement("li");
        li.textContent = highscore;
        li.setAttribute("data-index", index);

        var button = document.createElement("button");
        button.textContent = "Complete";

        li.appendChild(button);
        highscoresList.appendChild(li);
    }
}
// function for local storage of scores
function init() {
    // Checking for high scores in local storage then parsing value from local storage
    var storedScore = JSON.parse(localStorage.getItem("highscores"));
    if (storedScore !== null) {
        // reassign array to stored value
        highscores = storedScore;
    }
    // render to DOM
    renderHighscores();
}
// storing score in local function
function storeHighscores() {
    // save highscore to local storage by stringify array
    localStorage.setItem("highscores", JSON.stringify(highscores));
}
highscoresForm.addEventListener("submit" , function(event) {
    event.preventDefault();
    var highscoresText = highscoresInput.value.trim();

    if (highscoresText === "") {
        return;
    }
    highscores.push(highscoresText);
    highscoresInput.value = "";

    storeHighscores();
    renderHighscores();
});

// Add event listener to start quiz
startBtn.addEventListener("click", startQuiz)

// Call function to show opening page
openingPage();
