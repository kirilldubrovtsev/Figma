let button = document.querySelector(".button");
let loginpopup = document.querySelector(".login_popup");


button.addEventListener('click', ShowPopup);

function ShowPopup(evt) {

console.log(evt);
evt.preventDefault();  

loginpopup.classList.toggle ('show-popup')


};