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