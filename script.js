// script.js
window.onload = function() {
    var gameLinks = document.querySelectorAll('nav ul li a');
    for (var i = 0; i < gameLinks.length; i++) {
        gameLinks[i].addEventListener('click', navigateToGame);
    }
}

function navigateToGame(event) {
    event.preventDefault();
    var gameUrl = event.target.getAttribute('href');
    window.location.href = gameUrl;
}
