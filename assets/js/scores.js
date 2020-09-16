function renderHighscores() {
    highscoresList.innerHTML = highscores;
    highscoresCount.textContent = highscores.length;
    for (var index = 0; index < highscores.length; index++) {
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