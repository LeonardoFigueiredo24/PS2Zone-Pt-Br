document.getElementById('searchBar').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let games = document.querySelectorAll('.game');

    games.forEach(game => {
        let title = game.querySelector('.game-overlay h2').innerText.toLowerCase();
        game.style.display = title.includes(filter) ? 'block' : 'none';
    });
});
