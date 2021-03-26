const reloj = document.querySelector(".reloj");

const getHora = () => {
    const fecha = new Date();
    const tiempo = {
        hora: fecha.getHours(),
        minutos: fecha.getMinutes(),
        segundos: fecha.getSeconds() 
    };
    
    reloj.innerHTML = `${tiempo.hora} : ${tiempo.minutos} : ${tiempo.segundos}`; 
}

// setTimeout((a = 3, b = 5) => console.log( a + b), 3000);


// Dejarlo sin paréntesis para que itere
setInterval(getHora, 1000);