document.addEventListener("DOMContentLoaded", start);

function start() {
    hentNav();
    /*  Klik eventlistener på burgermenuen*/
}

async function hentNav() {
    const urlHeader = "header.html";
    const responseHeader = await fetch(urlHeader);
    const includeHeader = await responseHeader.text();
    document.querySelector("header").innerHTML = includeHeader;

    clickBurgermenu();
}

function clickBurgermenu() {

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#burgermenu").classList.toggle("hide");
    /*Toggle på menuen, så den åbner og lukker, når man klikker på den
     */
    let erSkjult = document.querySelector("#burgermenu").classList.contains("hide"); /*Varibel, når menuen indeholder "hide" som klasse*/

    if (erSkjult == true) {
        document.querySelector("#menuknap").classList.remove("change");
        /*  Hvis menuen indeholder classen "skjult"
  sæt tegnet til at være dette*/
    } else {
        document.querySelector("#menuknap").classList.add("change");
        /*    Ellers skift tegn til X*/
    }

}
