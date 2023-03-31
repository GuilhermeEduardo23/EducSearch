window.addEventListener(`load`, () => {
    const spanYear = document.getElementById(`year`),
        currentDate = new Date(),
        currentYear = currentDate.getFullYear();

        spanYear.innerText = currentYear;
});

const spanDarkMode = document.getElementById(`dark-mode`);

spanDarkMode.addEventListener(`click`, () => {
    document.body.classList.toggle(`dark-theme`);

    if(document.body.classList.value === `dark-theme`)
        spanDarkMode.innerHTML = `<ion-icon name="sunny"></ion-icon>`;
    else
        spanDarkMode.innerHTML = `<ion-icon name="moon"></ion-icon>`;
});

/*----------------------------------------------------------------*/

//Inclusão da Api do ChatGPT

//Acessar o campo de texto
const mainSearch = document.querySelector(`.search`);

if(mainSearch) {
    //Aguardar o usuário clicar no botão Enviar
    mainSearch.addEventListener(`load`, async (e) => {
        //Bloquear o recarregamento da página
        e.preventDefault();

        //Receber o valor do input
        let pergunta = document.querySelector(`input`).value;

        console.log(pergunta);
    });
}