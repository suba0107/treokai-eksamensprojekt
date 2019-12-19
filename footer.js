 let footer;
 const urlVisit = "http://kbdesign.dk/kea/treokai/wordpress/wp-json/wp/v2/kontakt/107"

 document.addEventListener("DOMContentLoaded", start);

 function start() {
     getJsonFooter();
     getFooter();

 }

 async function getFooter() {
     const responseFooter = await fetch("footer.html");
     const includeFooter = await responseFooter.text();
     document.querySelector("footer").innerHTML = includeFooter;
 }

 async function getJsonFooter() {
     let data = await fetch(urlVisit);
     sideFooter = await data.json();
     showFooter();
 }

 function showFooter() {
     document.querySelector(".aabningstider").innerHTML = sideFooter.aabningstider;
     document.querySelector(".tlf").textContent = sideFooter.tlf_butik;
     document.querySelector(".adresse").innerHTML = sideFooter.butiksadresse;

     document.querySelector(".email").textContent = sideFooter.mail;
 }
