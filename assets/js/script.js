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
        console.log("Incorrect", timer = timer - 15);
    }
    // increase the score
    index++
    // check and see if questions index is undefined, if it is clear timer and show the score

    if (index >= questions.length) {
        clearInterval(questionTimer);
    }
    else {
        nextQuestion();
    }
    // Call function to go next question 
    nextQuestion();

}

function endGame() {
    if (timer < 0) {
        score = 0
    }
    else {
        score = timer;
    }
    // timer hits or no questions go to end page
    timerEl.style.display = "none";
    var buttonDiv = document.querySelector(".buttonDiv");
    buttonDiv.innerHTML = "";
    
}









    var highScore = JSON.parse(localStorage.getItem("High Score"))
    // Write code here to check if there are todos in localStorage
    // If so, parse the value from localStorage and assign it to the todos variable
    if (storedTodos !== null) {
      todos = storedTodos
    }
    // Render todos to the DOM
    renderTodos();
  }

  function storeTodos() {
    // Add code here to stringify the todos array and save it to the "todos" key in localStorage
    localStorage.setItem("todos", JSON.stringify(todos))
  }

timer.innerHTML = timer + ' out of ' + timer;

// Add event listener to start quiz
startBtn.addEventListener("click", startQuiz)

// Call function to show opening page
openingPage();
