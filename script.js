document.addEventListener("DOMContentLoaded", function () {
    const naoButton = document.getElementById("nao");
    const simButton = document.getElementById("sim");

    simButton.addEventListener("click", function () {
        alert("Agora você é minha, aceitou, já era!");
    });

    naoButton.addEventListener("click", function () {
        naoButton.style.position = "fixed";
        const randTop = Math.random() * (window.innerHeight - naoButton.offsetHeight);
        const randLeft = Math.random() * (window.innerWidth - naoButton.offsetWidth);
        naoButton.style.top = randTop + "px";
        naoButton.style.left = randLeft + "px";
    });
});

