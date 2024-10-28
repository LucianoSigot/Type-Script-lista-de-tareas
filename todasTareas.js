"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarTodasTareas = mostrarTodasTareas;
var prompt_sync_1 = require("prompt-sync");
var Menu_1 = require("./Menu.js");
var Pause_1 = require("./Pause.js"); // Importar pausa
var mostrarDetalles_1 = require("./mostrarDetalles.js");
var editarTareas_1 = require("./editarTareas.js");
var leer = (0, prompt_sync_1.default)();
var pause = new Pause_1.default();
function mostrarTareasPorEstado(arregloTarea, estado, mensaje) {
    var tareasFiltradas = [];
    var j = 0;
    console.log(mensaje); // Mensaje específico como "Estas son tus tareas pendientes"
    for (var i = 0; i < arregloTarea.length; i++) { // Recorro el arreglo
        if (arregloTarea[i]["estado"] === estado) { // Verifico que existan tareas con ese estado
            tareasFiltradas.push(arregloTarea[i]); // Almacena las tareas que cumplen con el criterio
            console.log("[".concat(j + 1, "] ").concat(arregloTarea[i]["titulo"])); // Muestra las tareas por su índice y título
            j++;
        }
    }
    if (tareasFiltradas.length > 0) {
        var elegir = leer("Elija la tarea que desea ver (número) o 0 para volver: ");
        if (elegir === "0") {
            console.log("Volviendo...");
            return; // Regresa al menú principal
        }
        var indice = parseInt(elegir) - 1; // Convierte el string de elegir a Int y le resta 1
        if (indice >= 0 && indice < tareasFiltradas.length) { // Controla que el índice no esté mal ingresado
            (0, mostrarDetalles_1.default)(tareasFiltradas[indice]); // Muestra los detalles de las tareas seleccionadas
            return tareasFiltradas[indice]; // Devuelve la tarea seleccionada, si se desea editar
        }
        else {
            console.error("Índice de tarea no válido.");
        }
    }
    else {
        console.log("No tienes tareas en estado: ".concat(estado, "."));
    }
    pause.run();
}
function mostrarTodasTareas(arregloTarea) {
    var opcionesMenu;
    if (arregloTarea.length === 0) {
        console.log("No hay tareas disponibles.");
        pause.run();
    }
    else {
        do {
            (0, Menu_1.menuTareas)();
            opcionesMenu = leer("Ingrese una opción del menú de tareas: ");
            switch (opcionesMenu) {
                case "1": // Mostrar todas las tareas
                    console.log("Estas son todas tus tareas: ");
                    for (var i = 0; i < arregloTarea.length; i++) {
                        console.log("[".concat(i + 1, "] ").concat(arregloTarea[i]["titulo"]));
                    }
                    var elegir = leer("Elija la tarea que desea ver (número) o 0 si quiere volver: ");
                    if (elegir === "0") {
                        console.log("Volviendo...");
                        pause.run();
                        break;
                    }
                    var indiceTarea = parseInt(elegir) - 1;
                    if (indiceTarea >= 0 && indiceTarea < arregloTarea.length) {
                        (0, mostrarDetalles_1.default)(arregloTarea[indiceTarea]);
                        var tareaE = leer("Ingrese E para editar o 0 para volver: ").toUpperCase();
                        if (tareaE === "E") {
                            console.log("Ingresando al menú de editar tareas...");
                            pause.run();
                            console.clear();
                            console.log("Estas editando la tarea: ".concat(arregloTarea[indiceTarea]["titulo"], " "));
                            (0, editarTareas_1.edicion)(arregloTarea[indiceTarea]);
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
                    var tareaPendiente = mostrarTareasPorEstado(arregloTarea, "Pendiente", "Estas son tus tareas pendientes:");
                    if (tareaPendiente) {
                        var elegir_1 = leer("Ingrese E para editar o 0 para volver: ").toUpperCase();
                        if (elegir_1 === "E") {
                            console.log("Ingresando al menú de editar tareas...");
                            console.log("Estas editando la tarea: ".concat(tareaPendiente["titulo"], " "));
                            (0, editarTareas_1.edicion)(tareaPendiente);
                            pause.run();
                        }
                        else {
                            if (elegir_1 !== "E" && elegir_1 !== "0") {
                                console.error("Tiene que ingresar E o 0: ");
                                pause.run();
                                break;
                            }
                        }
                    }
                    break;
                case "3": // Mostrar tareas en curso
                    var tareaEncurso = mostrarTareasPorEstado(arregloTarea, "En curso", "Estas son tus tareas en curso:");
                    if (tareaEncurso) {
                        var elegir_2 = leer("Ingrese E para editar o 0 para volver: ").toUpperCase();
                        if (elegir_2 === "E") {
                            console.log("Ingresando al menú de editar tareas...");
                            console.log("Estas editando la tarea: ".concat(tareaEncurso["titulo"], " "));
                            (0, editarTareas_1.edicion)(tareaEncurso);
                        }
                        else {
                            if (elegir_2 !== "E" && elegir_2 !== "0") {
                                console.error("Tiene que ingresar E o 0: ");
                                pause.run();
                                break;
                            }
                        }
                    }
                    break;
                case "4": // Mostrar tareas terminadas
                    var tareaTerminada = mostrarTareasPorEstado(arregloTarea, "Terminada", "Estas son tus tareas terminadas:");
                    if (tareaTerminada) {
                        var elegir_3 = leer("Ingrese E para editar o 0 para volver: ").toUpperCase();
                        if (elegir_3 === "E") {
                            console.log("Ingresando al menú de editar tareas...");
                            console.log("Estas editando la tarea: ".concat(tareaTerminada["titulo"], " "));
                            (0, editarTareas_1.edicion)(tareaTerminada);
                            pause.run();
                        }
                        else {
                            if (elegir_3 !== "E" && elegir_3 !== "0") {
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
