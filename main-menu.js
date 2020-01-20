document.addEventListener("DOMContentLoaded", start);

function start() {
    hentNav();
    /*  Klik eventlistener på burgermenuen*/
}

async function hentNav() {
    /*Funktionen sættes i gang i "main-menu.js" efter DOM'en er loaded.*/
    const urlHeader = "header.html";
    const responseHeader = await fetch(urlHeader);
    const includeHeader = await responseHeader.text(); /*Når den har hentet/fetched "header.html" bruger vi text-metoden til at hente teksten ind. Den er dog hentet ind som en tekst-streng.*/
    document.querySelector("header").innerHTML = includeHeader; /*Ved at bruge innerHTML kan vi hente det ind som HTML i stedet.*/

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
    let erSkjult = document.querySelector("#burgermenu").classList.contains("hide"); /*Variabel, når menuen indeholder "hide" som klasse*/

    if (erSkjult == true) {
        document.querySelector("#menuknap").classList.remove("change");
        /*  Hvis menuen indeholder classen "skjult"
  sæt tegnet til at være det, som den er stylet til i css*/
    } else {
        document.querySelector("#menuknap").classList.add("change");
        /*    Ellers skift tegn til X ved at tilføje classen change*/
        document.querySelectorAll(".dropdown").forEach(elm => {
            elm.addEventListener("click", dropDown); /*for hvert dropdown-element tilføjes eventlisteneren klik*/
        })

    }
}


function dropDown() {
    document.querySelector(".dropdown-content").style.display = "block"; /*Når der er klikket på et dropdown-element, vises indholdet*/
}
