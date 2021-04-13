const color = document.querySelector("#color");
const salida = document.querySelector("#salida");
const color2 = document.querySelector("#color2");
const salida2 = document.querySelector("#salida2");
const angle = document.getElementById("angle");
const show_angle = document.getElementById("show-angle");
const msg = document.getElementById("msg"); 
const stop1 = document.getElementById("stop1");
const stop2 = document.getElementById("stop2");
const title = document.getElementById("site-title");
const btn = document.querySelector(".btn-grad");


//Reacciona a los cambios de color en tiempo real
color.addEventListener("input", () => {
    const value = color.value;
    salida.innerHTML = value;
    salida.style.background = value;
    salida.style.color = "#fff";
    document.body.style.background = `linear-gradient(${angle.value}deg, ${color.value} ${stop1.value}%, ${color2.value} ${stop2.value}%)`;
    title.style.backgroundImage = `linear-gradient(${angle.value}deg, ${color.value} ${stop1.value}%, ${color2.value} ${stop2.value}%)`;
    btn.style.backgroundImage = `linear-gradient(${angle.value}deg, ${color.value} ${stop1.value}%, ${color2.value} ${stop2.value}%)`;
    msg.textContent = document.body.style.background;
})

color2.addEventListener("input", () => {
    const value2 = color2.value;
    salida2.innerHTML = value2;
    salida2.style.background = value2;
    salida2.style.color = "#fff";
    document.body.style.background = `linear-gradient(${angle.value}deg, ${color.value} ${stop1.value}%, ${color2.value} ${stop2.value}%)`;
    title.style.backgroundImage = `linear-gradient(${angle.value}deg, ${color.value} ${stop1.value}%, ${color2.value} ${stop2.value}%)`;
    btn.style.backgroundImage = `linear-gradient(${angle.value}deg, ${color.value} ${stop1.value}%, ${color2.value} ${stop2.value}%)`;
    msg.textContent = document.body.style.background;
})

angle.addEventListener("input", () => {
    show_angle.innerHTML = angle.value;
    document.body.style.background = `linear-gradient(${angle.value}deg, ${color.value} ${stop1.value}%, ${color2.value} ${stop2.value}%)`;
    title.style.backgroundImage = `linear-gradient(${angle.value}deg, ${color.value} ${stop1.value}%, ${color2.value} ${stop2.value}%)`;
    btn.style.backgroundImage = `linear-gradient(${angle.value}deg, ${color.value} ${stop1.value}%, ${color2.value} ${stop2.value}%)`;
    msg.textContent = document.body.style.background;
})




