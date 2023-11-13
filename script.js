// Carregue o GSAP diretamente no HTML, não precisa mais dessa função
// loadGSAP();

document.addEventListener("DOMContentLoaded", function () {
    const naoButton = document.getElementById("nao");
    const simButton = document.getElementById("sim");

    simButton.addEventListener("click", function () {
        alert("Agora você é minha, aceitou, já era!");

        // Adiciona fogos de artifício
        createFireworks();
    });

    naoButton.addEventListener("click", function () {
        naoButton.style.position = "fixed";
        const randTop = Math.random() * (window.innerHeight - naoButton.offsetHeight);
        const randLeft = Math.random() * (window.innerWidth - naoButton.offsetWidth);
        naoButton.style.top = randTop + "px";
        naoButton.style.left = randLeft + "px";
    });

    function createFireworks() {
        const numberOfFireworks = 10;

        for (let i = 0; i < numberOfFireworks; i++) {
            const fireworks = document.createElement("div");
            fireworks.classList.add("fireworks");
            document.body.appendChild(fireworks);

            gsap.to(fireworks, {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 2 + 1,
                duration: 1,
                onComplete: () => {
                    document.body.removeChild(fireworks);
                }
            });
        }
    }
});
