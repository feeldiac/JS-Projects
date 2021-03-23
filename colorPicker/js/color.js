const color = document.querySelector("#color");
const salida = document.querySelector("#salida");

//Reacciona a los cambios de color en tiempo real
color.addEventListener("input", () => {
    const value = color.value;
    // console.log(value);
    salida.innerHTML = value;

})

