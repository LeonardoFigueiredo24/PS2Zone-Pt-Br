document.querySelectorAll('.game').forEach(game => {
    game.addEventListener('click', function() {
        if (window.innerWidth <= 768) {  // Verifica se é um dispositivo móvel
            this.classList.toggle('clicked');  // Alterna a classe 'clicked' para exibir o botão
        }
    });
});

function filterGames() {
    var searchQuery = document.getElementById("searchBar").value.toLowerCase();
    var games = document.querySelectorAll(".game");

    games.forEach(function(game) {
        var title = game.querySelector("h2").textContent.toLowerCase();
        if (title.includes(searchQuery)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
}