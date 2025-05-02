// crear las constantes
const tiempo = document.querySelector('.tiempo'),
fecha = document.querySelector('.fecha');

// crear la funcion para mostrar la fecha
function relojDigital(){
    let fe = new Date();
    let dia = fe.getDate();
    let mes = fe.getMonth();
    let year = fe.getFullYear();
    let semanaDia = fe.getDay();


    let horaTexto = fe.toLocaleTimeString('es-SV', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'America/El_Salvador'
    });

    tiempo.innerHTML = horaTexto;

    let semana = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    let diaSemana = semana[semanaDia];
    let nombreMes = meses[mes];

    fecha.innerHTML = `${diaSemana}, ${dia} de ${nombreMes} de ${year}`;
}

setInterval(relojDigital, 1000);