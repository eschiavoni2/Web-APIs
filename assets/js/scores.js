var highscoresList = document.querySelector("#highscores-list");
var highscores;

function getHighscores(){
    // go and get high scores from localstorage or empty array
    highscores = JSON.parse(localStorage.getItem("highscores")) || [];
}
function renderHighscores() {
    highscoresList.innerHTML = highscores;
    for (var index = 0; index < highscoresList; index++) {
        var highscore = highscores[index];

        var li = document.createElement("li");
        li.textContent = highscore;
        li.setAttribute("data-index", index);

        // var button = document.createElement("button");
        // button.textContent = "Complete";

        li.appendChild(button);
        highscoresList.appendChild(li);
    }
}
    // render to DOM
    renderHighscores();