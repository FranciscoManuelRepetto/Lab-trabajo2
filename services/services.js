
export const addFunctionRefButton = (component, direction) => {
    component.addEventListener('click', () => {
        location.href = direction;
    });
}

/* Functions only used in ProxComidas */
export const buildDate = (fecha) => {
    let dd = fecha.day;
    let mm = fecha.month;
    let yyyy = fecha.year;
    let today = dd + '/' + mm + '/' + yyyy;
    let aux = yyyy+'-'+mm+'-'+dd+' 00:00:00';
    today = obtenerDiaSemana(aux)+' '+today;
    return today;
}

const obtenerDiaSemana = (fecha) => {
    const dias = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado',];
    const numeroDia = new Date(fecha).getDay();
    return dias[numeroDia];
}
