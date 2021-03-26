const getHora = () => {
    const fecha = new Date();
    const tiempo = {
        hora: fecha.getHours(),
        minutos: fecha.getMinutes(),
        segundos: fecha.getSeconds() 
    };
    
    const ahora = `${tiempo.hora} : ${tiempo.minutos} : ${tiempo.segundos}`
    console.log(ahora);

    document.querySelector(".reloj").innerHTML = ahora;
}

getHora();