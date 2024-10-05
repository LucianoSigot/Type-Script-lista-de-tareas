import promptSync from 'prompt-sync';
import { mostrarDetalles } from './mostrarDetalles.js';
const prompt = promptSync();
// Función para mostrar un mensaje de error personalizado
function mostrarError(mensaje) {
    console.error(`Error: ${mensaje}`);
}
// Función para validar la entrada del usuario
function validarEntrada(entrada) {
    if (entrada.trim() === '') {
        return false;
    }
    return true;
}
export function buscarTarea(aTareas) {
    // Pide al usuario que ingrese el título o parte del mismo para buscar la tarea
    let busqueda = prompt("Ingrese el título o parte del mismo para buscar la tarea:");
    if (!validarEntrada(busqueda)) {
        mostrarError('Debe ingresar un título o parte del mismo para buscar la tarea.');
        return;
    }
    busqueda = busqueda.toLowerCase();
    let resultados = [];
    // Búsqueda usando dos bucles
    for (let i = 0; i < aTareas.length; i++) {
        let titulo = aTareas[i].titulo.toLowerCase();
        // Verificar si el término de búsqueda está contenido en el título
        for (let j = 0; j <= titulo.length - busqueda.length; j++) {
            if (titulo.substring(j, j + busqueda.length) === busqueda) {
                resultados.push(aTareas[i]);
                break; // Detener el ciclo interno una vez encontrada la coincidencia
            }
        }
    }
    if (resultados.length > 0) {
        console.log(`**Resultados de búsqueda para "${busqueda}":**`);
        resultados.forEach((tarea, index) => {
            console.log(`${index + 1}. ${tarea.titulo}`); // Mostrar solo el título
        });
        console.log("0 para volver al menú");
        // Pide al usuario que ingrese el número de la tarea que desea ver
        let opcion = prompt("Ingrese el número de la tarea que desea ver:");
        if (opcion === "0") {
            // Vuelve al menú principal
            console.log("Volviendo al menú principal...");
        }
        else {
            // Verifica si el índice ingresado por el usuario es válido
            if (parseInt(opcion) < 1 || parseInt(opcion) > resultados.length) {
                mostrarError('Índice inválido. Debe ingresar un número entre 1 y ' + resultados.length);
                return;
            }
            // Muestra la tarea en la posición seleccionada
            let tarea = resultados[parseInt(opcion) - 1];
            if (tarea) {
                mostrarDetalles(tarea);
            }
            else {
                mostrarError("Tarea no encontrada");
            }
        }
    }
    else {
        // Muestra un mensaje indicando que no se encontraron tareas que coincidan con la búsqueda
        console.log(`No se encontraron tareas que coincidan con "${busqueda}".`);
    }
}
