const color = document.querySelector("#color");
const salida = document.querySelector("#salida");
const color2 = document.querySelector("#color2");
const salida2 = document.querySelector("#salida2");
const msg = document.getElementById("msg");
const btn = document.getElementById("btn");

//Reacciona a los cambios de color en tiempo real
color.addEventListener("input", () => {
    const value = color.value;
    salida.innerHTML = value;
    salida.style.background = value;
    salida.style.color = "#fff";

    return value;
})

color2.addEventListener("input", () => {
    const value2 = color2.value;
    salida2.innerHTML = value2;
    salida2.style.background = value2;
    salida2.style.color = "#fff";

    return value2;
})

btn.addEventListener("click", function () {
    document.body.style.background = `linear-gradient(to right, ${color.value}, ${color2.value})`;
    msg.textContent = document.body.style.background;
  });


