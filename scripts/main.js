const imgLogo = document.getElementById(`logo`);

window.addEventListener(`load`, () => {
    const spanYear = document.getElementById(`year`),
        currentDate = new Date(),
        currentYear = currentDate.getFullYear();

        spanYear.innerText = currentYear;

        imgLogo.setAttribute(`src`, `./assets/images/google.png`);
});

const spanDarkMode = document.getElementById(`dark-mode`);

spanDarkMode.addEventListener(`click`, () => {
    document.body.classList.toggle(`dark-theme`);

    if(document.body.classList.value === `dark-theme`) {
        spanDarkMode.innerHTML = `<ion-icon name="sunny"></ion-icon>`;
        imgLogo.setAttribute(`src`, `./assets/images/google_dark_mode.png`);
    }
    else {
        spanDarkMode.innerHTML = `<ion-icon name="moon"></ion-icon>`;
        imgLogo.setAttribute(`src`, `./assets/images/google.png`);
    }
        
});