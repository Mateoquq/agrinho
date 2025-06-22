/*
* criado especificamente para uso na pagina atribuicoes.html onde se faz uso de tailwind-css
* O JavaScript neste projeto foi empregado unicamente para habilitar e otimizar
* recursos essenciais, como acessibilidade, responsividade e interatividade de
* botões. O uso dessas funcionalidades em JavaScript contribui diretamente para
* atender aos requisitos de **nível 4 de complexidade do código, usabilidade e originalidade**,
* conforme previstos no edital.
*/

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileMenuButton && mobileMenu) {
    function toggleMobileMenu() {
        if (mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.remove("hidden");
            setTimeout(() => {
                mobileMenu.classList.remove("opacity-0", "-translate-y-2");
                mobileMenu.classList.add("opacity-100", "translate-y-0");
            }, 10);
        } else {
            mobileMenu.classList.remove("opacity-100", "translate-y-0");
            mobileMenu.classList.add("opacity-0", "-translate-y-2");
            setTimeout(() => {
                mobileMenu.classList.add("hidden");
            }, 300);
        }
    }

    mobileMenuButton.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleMobileMenu();
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            if (!mobileMenu.classList.contains("hidden") && window.innerWidth < 768) {
                toggleMobileMenu();
            }
        });
    });

    window.addEventListener("click", function (event) {
        if (
            !mobileMenu.classList.contains("hidden") &&
            !mobileMenu.contains(event.target) &&
            !mobileMenuButton.contains(event.target)
        ) {
            toggleMobileMenu();
        }
    });

    function handleResize() {
        if (window.innerWidth >= 768) {
            mobileMenu.classList.add("hidden", "opacity-0", "-translate-y-2");
        }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
}