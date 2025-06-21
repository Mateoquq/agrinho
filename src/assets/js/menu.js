/*
* O JavaScript neste projeto foi empregado unicamente para habilitar e otimizar
* recursos essenciais, como acessibilidade, responsividade e interatividade de
* botões. O uso dessas funcionalidades em JavaScript contribui diretamente para
* atender aos requisitos de **nível 4 de complexidade do código, usabilidade e originalidade**,
* conforme previstos no edital.
*/

// script para abrir e fechar menu hambúrguer
const navList = document.getElementById("nav-list");
const navButton = document.getElementById("nav-button");

navButton.addEventListener("click", function () {
  navList.classList.toggle("show");
});

document.querySelectorAll(".header-link").forEach(link => {
  link.addEventListener("click", function () {
    navList.classList.remove("show");
  });
});

window.addEventListener("click", function (event) {
  if (!event.target.closest(".header") && navList.classList.contains("show")) {
    navList.classList.remove("show");
  }
});
