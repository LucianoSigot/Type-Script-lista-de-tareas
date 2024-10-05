import { agregarTarea } from './agregarTarea.js';
import { buscarTarea } from './buscarTarea.js';
import { mostrarTodasTareas, mostrarTareasPendientes, mostrarTareasEnCurso, mostrarTareasTerminadas } from './mostrarTareas.js';
import promptSync from 'prompt-sync';
const prompt = promptSync();
let aTareas = [];
function darNombre() {
    const nombre = prompt("Ingrese su nombre:");
    if (!nombre || nombre.trim() === "") {
        console.error("Nombre no válido");
        return darNombre();
    }
    return nombre;
}
function mostrarMenuPrincipal() {
    let op;
    const nombre = darNombre();
    do {
        console.log('Hola: ' + nombre);
        console.log("¿Qué deseas hacer?");
        console.log("[1] Ver Mis tareas");
        console.log("[2] Buscar mis tareas");
        console.log("[3] Agregar una tarea");
        console.log("[0] Salir...");
        op = prompt('Ingrese la opción deseada: ');
        if (!op || op.trim() === "") {
            console.error("Opción no válida");
            continue;
        }
        switch (op) {
            case "1":
                mostrarMenuTareas();
                break;
            case "2":
                if (!aTareas || aTareas.length === 0) {
                    console.log("No hay tareas cargadas. Por favor, agregue una tarea antes de buscar.");
                }
                else {
                    buscarTarea(aTareas);
                }
                break;
            case "3":
                agregarTarea(aTareas);
                break;
            case "0":
                console.log("Hasta luego!");
                break;
            default:
                console.log("Opción no válida, por favor ingrese una opción válida.");
        }
    } while (op !== "0");
}
function mostrarMenuTareas() {
    let opcion;
    do {
        console.log("[1] Ver todas las tareas");
        console.log("[2] Ver tareas pendientes");
        console.log("[3] Ver tareas en curso");
        console.log("[4] Ver tareas terminadas");
        console.log("[0] Volver");
        opcion = prompt("Ingrese el número de la opción que desea:");
        if (!opcion || opcion.trim() === "") {
            console.error("Opción no válida");
            continue;
        }
        switch (opcion) {
            case "1":
                if (!aTareas || aTareas.length === 0) {
                    console.log("No hay tareas");
                }
                else {
                    mostrarTodasTareas(aTareas);
                }
                break;
            case "2":
                if (!aTareas || aTareas.length === 0) {
                    console.log("No hay tareas");
                }
                else {
                    mostrarTareasPendientes(aTareas);
                }
                break;
            case "3":
                if (!aTareas || aTareas.length === 0) {
                    console.log("No hay tareas");
                }
                else {
                    mostrarTareasEnCurso(aTareas);
                }
                break;
            case "4":
                if (!aTareas || aTareas.length === 0) {
                    console.log("No hay tareas");
                }
                else {
                    mostrarTareasTerminadas(aTareas);
                }
                break;
            case "0":
                console.log("Volviendo al menú principal...");
                break;
            default:
                console.log("Opción no válida, por favor ingrese una opción válida.");
        }
    } while (opcion !== "0");
}
mostrarMenuPrincipal();
