import promptSync from 'prompt-sync';
const prompt = promptSync();
export function agregarTarea(aTareas) {
    let titulo = prompt("Ingrese el título de la tarea:");
    while (!titulo || titulo.trim() === "") {
        console.error("Título no válido");
        titulo = prompt("Ingrese el título de la tarea:");
    }
    let descripcion = prompt("Ingrese la descripción de la tarea:");
    while (!descripcion || descripcion.trim() === "") {
        console.error("Descripción no válida");
        descripcion = prompt("Ingrese la descripción de la tarea:");
    }
    let vencimiento;
    do {
        vencimiento = prompt("Ingrese la fecha de vencimiento de la tarea (Formato AAAA-MM-DD):");
        if (!vencimiento || vencimiento.trim() === "") {
            console.error("Fecha de vencimiento no válida");
        }
        else if (!validaDato(vencimiento)) {
            console.error("Fecha de vencimiento no válida, debe ser en formato AAAA-MM-DD");
        }
        else if (!verificaDia(vencimiento)) {
            console.error("Fecha de vencimiento debe ser mayor o igual a la fecha actual");
        }
    } while (!vencimiento || vencimiento.trim() === "" || !validaDato(vencimiento) || !verificaDia(vencimiento));
    let dificultad;
    do {
        dificultad = parseInt(prompt('Ingrese la dificultad de la tarea (1: Fácil, 2: Medio, 3: Difícil):'));
        if (isNaN(dificultad) || dificultad < 1 || dificultad > 3) {
            console.error("Dificultad no válida, debe ser un número entre 1 y 3");
        }
    } while (isNaN(dificultad) || dificultad < 1 || dificultad > 3);
    const tarea = {
        titulo,
        descripcion,
        vencimiento,
        dificultad,
        estado: 'Pendiente',
        fechaCreacion: new Date(),
        fechaUltimaEdicion: null
    };
    aTareas.push(tarea);
    console.log("Tarea agregada correctamente");
}
function validaDato(cadena) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(cadena);
}
function verificaDia(cadena) {
    const hoy = new Date();
    const vencimientoDato = new Date(cadena);
    return vencimientoDato >= hoy;
}
