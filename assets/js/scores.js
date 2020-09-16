// high-scores
var highscoresList = document.querySelector("#highscores-list");

// render highscores function
function renderHighscores() {
    // checking local storage for high scores or empty array
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    console.log(highscores)
    // for loop for high scores
    for (var index = 0; index < highscores.length; index++) {
        var highscore = highscores[index];
        // creating a list with high scores 
        var li = document.createElement("li");
        li.textContent = highscore.initials + " - " + highscore.score;
        li.setAttribute("data-index", index);
        // appending the high score list
        highscoresList.appendChild(li);
    }
}
// render to DOM
renderHighscores();