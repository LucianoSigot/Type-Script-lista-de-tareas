import prompt from 'prompt-sync';
import { menuTareas } from "./Menu.js";
import pausa from './Pause.js'; // Importar pausa
import mostrarDetalles from './mostrarDetalles.js';
import { edicion } from './editarTareas.js';
const leer = prompt();
const pause = new pausa();
function mostrarTareasPorEstado(arregloTarea, estado, mensaje) {
    let tareasFiltradas = [];
    let j = 0;
    console.log(mensaje); // Mensaje específico como "Estas son tus tareas pendientes"
    for (let i = 0; i < arregloTarea.length; i++) { // Recorro el arreglo
        if (arregloTarea[i]["estado"] === estado) { // Verifico que existan tareas con ese estado
            tareasFiltradas.push(arregloTarea[i]); // Almacena las tareas que cumplen con el criterio
            console.log(`[${j + 1}] ${arregloTarea[i]["titulo"]}`); // Muestra las tareas por su índice y título
            j++;
        }
    }
    if (tareasFiltradas.length > 0) {
        let elegir = leer("Elija la tarea que desea ver (número) o 0 para volver: ");
        if (elegir === "0") {
            console.log("Volviendo...");
            return; // Regresa al menú principal
        }
        const indice = parseInt(elegir) - 1; // Convierte el string de elegir a Int y le resta 1
        if (indice >= 0 && indice < tareasFiltradas.length) { // Controla que el índice no esté mal ingresado
            mostrarDetalles(tareasFiltradas[indice]); // Muestra los detalles de las tareas seleccionadas
            return tareasFiltradas[indice]; // Devuelve la tarea seleccionada, si se desea editar
        }
        else {
            console.error("Índice de tarea no válido.");
        }
    }
    else {
        console.log(`No tienes tareas en estado: ${estado}.`);
    }
    pause.run();
}
export function mostrarTodasTareas(arregloTarea) {
    let opcionesMenu;
    if (arregloTarea.length === 0) {
        console.log("No hay tareas disponibles.");
        pause.run();
    }
    else {
        do {
            menuTareas();
            opcionesMenu = leer("Ingrese una opción del menú de tareas: ");
            switch (opcionesMenu) {
                case "1": // Mostrar todas las tareas
                    console.log("Estas son todas tus tareas: ");
                    for (let i = 0; i < arregloTarea.length; i++) {
                        console.log(`[${i + 1}] ${arregloTarea[i]["titulo"]}`);
                    }
                    let elegir = leer("Elija la tarea que desea ver (número) o 0 si quiere volver: ");
                    if (elegir === "0") {
                        console.log("Volviendo...");
                        pause.run();
                        break;
                    }
                    const indiceTarea = parseInt(elegir) - 1;
                    if (indiceTarea >= 0 && indiceTarea < arregloTarea.length) {
                        mostrarDetalles(arregloTarea[indiceTarea]);
                        let tareaE = leer("Ingrese E para editar o 0 para volver: ").toUpperCase();
                        if (tareaE === "E") {
                            console.log("Ingresando al menú de editar tareas...");
                            pause.run();
                            console.clear();
                            console.log(`Estas editando la tarea: ${arregloTarea[indiceTarea]["titulo"]} `);
                            edicion(arregloTarea[indiceTarea]);
                        }
                        else {
                            if (elegir !== "E" && elegir !== "0") {
                                console.error("Tiene que ingresar E o 0: ");
                                pause.run();
                                break;
                            }
                        }
                    }
                    else {
                        console.error("Índice de tarea no válido.");
                        pause.run();
                    }
                    pause.run();
                    break;
                case "2": // Mostrar tareas pendientes
                    const tareaPendiente = mostrarTareasPorEstado(arregloTarea, "Pendiente", "Estas son tus tareas pendientes:");
                    if (tareaPendiente) {
                        let elegir = leer("Ingrese E para editar o 0 para volver: ").toUpperCase();
                        if (elegir === "E") {
                            console.log("Ingresando al menú de editar tareas...");
                            console.log(`Estas editando la tarea: ${tareaPendiente["titulo"]} `);
                            edicion(tareaPendiente);
                            pause.run();
                        }
                        else {
                            if (elegir !== "E" && elegir !== "0") {
                                console.error("Tiene que ingresar E o 0: ");
                                pause.run();
                                break;
                            }
                        }
                    }
                    break;
                case "3": // Mostrar tareas en curso
                    const tareaEncurso = mostrarTareasPorEstado(arregloTarea, "En curso", "Estas son tus tareas en curso:");
                    if (tareaEncurso) {
                        let elegir = leer("Ingrese E para editar o 0 para volver: ").toUpperCase();
                        if (elegir === "E") {
                            console.log("Ingresando al menú de editar tareas...");
                            console.log(`Estas editando la tarea: ${tareaEncurso["titulo"]} `);
                            edicion(tareaEncurso);
                        }
                        else {
                            if (elegir !== "E" && elegir !== "0") {
                                console.error("Tiene que ingresar E o 0: ");
                                pause.run();
                                break;
                            }
                        }
                    }
                    break;
                case "4": // Mostrar tareas terminadas
                    const tareaTerminada = mostrarTareasPorEstado(arregloTarea, "Terminada", "Estas son tus tareas terminadas:");
                    if (tareaTerminada) {
                        let elegir = leer("Ingrese E para editar o 0 para volver: ").toUpperCase();
                        if (elegir === "E") {
                            console.log("Ingresando al menú de editar tareas...");
                            console.log(`Estas editando la tarea: ${tareaTerminada["titulo"]} `);
                            edicion(tareaTerminada);
                            pause.run();
                        }
                        else {
                            if (elegir !== "E" && elegir !== "0") {
                                console.error("Tiene que ingresar E o 0: ");
                                pause.run();
                                break;
                            }
                        }
                    }
                    break;
                case "0":
                    console.log("Volviendo al menú principal");
                    break;
                default:
                    console.error("Ingrese una opción correcta.");
            }
            console.clear(); // Limpia la consola después de cada opción
        } while (opcionesMenu !== "0");
    }
}
