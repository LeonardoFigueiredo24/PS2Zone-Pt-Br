document.querySelectorAll('.game').forEach(game => {
    game.addEventListener('click', function() {
        if (window.innerWidth <= 768) {  // Verifica se é um dispositivo móvel
            this.classList.toggle('clicked');  // Alterna a classe 'clicked' para exibir o botão
        }
    });
});
