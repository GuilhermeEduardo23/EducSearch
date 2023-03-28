const btnModoEscuro = document.getElementById(`fazer-login`);

btnModoEscuro.addEventListener(`click`, () => {
    document.body.classList.toggle(`dark-mode`);
});