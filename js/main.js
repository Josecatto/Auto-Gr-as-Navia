document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       ANIMACIONES SCROLL
    ================================ */
    const elementos = document.querySelectorAll(".animar");

    const mostrarElemento = () => {
        const alturaPantalla = window.innerHeight;

        elementos.forEach(el => {
            const distancia = el.getBoundingClientRect().top;
            if (distancia < alturaPantalla - 100) {
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", mostrarElemento);
    mostrarElemento();


    /* ===============================
       CARRUSEL GRÚAS
       (2 visibles en desktop)
    ================================ */
    const gruasTrack = document.getElementById("gruasTrack");
    let gruasIndex = 0;

    if (gruasTrack) {
        setInterval(() => {
            const imgs = gruasTrack.children;
            const imgWidth = imgs[0].offsetWidth + 20;

            gruasIndex++;

            if (gruasIndex > imgs.length - 2) {
                gruasIndex = 0;
            }

            gruasTrack.style.transform =
                `translateX(-${gruasIndex * imgWidth}px)`;
        }, 3000);
    }


    /* ===============================
       CARRUSEL PORTAFOLIO
       (3 visibles en desktop)
    ================================ */
    const portafolioTrack = document.getElementById("portafolioTrack");
    let portafolioIndex = 0;

    if (portafolioTrack) {
        setInterval(() => {
            const imgs = portafolioTrack.children;
            const imgWidth = imgs[0].offsetWidth + 20;

            portafolioIndex++;

            if (portafolioIndex > imgs.length - 3) {
                portafolioIndex = 0;
            }

            portafolioTrack.style.transform =
                `translateX(-${portafolioIndex * imgWidth}px)`;
        }, 3000);
    }

});
