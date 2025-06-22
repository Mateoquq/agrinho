/*
* O JavaScript neste projeto foi empregado unicamente para habilitar e otimizar
* recursos essenciais, como acessibilidade, responsividade e interatividade de
* botões. O uso dessas funcionalidades em JavaScript contribui diretamente para
* atender aos requisitos de **nível 4 de complexidade do código, usabilidade e originalidade**,
* conforme previstos no edital.
*/

// Ativação do VLibras - Governo Federal
(function () {
  const vlibrasDiv = document.createElement("div");
  vlibrasDiv.setAttribute("vw", "");
  vlibrasDiv.classList.add("enabled");
  vlibrasDiv.innerHTML = `
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  `;
  document.body.appendChild(vlibrasDiv);

  const script = document.createElement("script");
  script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
  script.onload = () => {
    new window.VLibras.Widget("https://vlibras.gov.br/app");
  };
  document.body.appendChild(script);
})();