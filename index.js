"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
var prompt_sync_1 = require("prompt-sync");
var Pause_1 = require("./Pause.js");
var Menu_1 = require("./Menu.js");
var agregarTareas_1 = require("./agregarTareas.js");
var todasTareas_1 = require("./todasTareas.js");
var Menu_2 = require("./Menu.js");
var buscarTareas_1 = require("./buscarTareas.js");
var pause = new Pause_1.default(); // Instancia de la clase Pausa
var leer = (0, prompt_sync_1.default)();
var arregloTarea = []; // Arreglo de tareas con el tipo Tarea
exports.default = arregloTarea;
function darNombre() {
    var nombre;
    nombre = leer("Ingrese su nombre: ");
    do {
        if (!nombre.trim()) {
            console.error("Ingrese un nombre distinto de vacío: ");
            nombre = leer(" ");
        }
    } while (!nombre.trim()); // Controla que no ingrese espacios vacíos
    return nombre;
}
function main() {
    var nombre = darNombre();
    var opciones;
    console.log("\u00A1Bienvenido ".concat(nombre, " a su sistema de lista de tareas!!!"));
    pause.run();
    console.clear();
    do {
        (0, Menu_1.default)();
        opciones = leer("Ingrese una opción: ");
        switch (opciones) {
            case "1": // Mostrar Todas las tareas
                (0, todasTareas_1.mostrarTodasTareas)(arregloTarea);
                break;
            case "2": // Buscar Tareas
                if (arregloTarea.length > 0) { // Comprobar si hay tareas en el arreglo
                    var op = void 0;
                    do {
                        (0, Menu_2.menuBuscarTareas)(); // Mostrar el menú de búsqueda
                        op = leer("Seleccione una opción: ");
                        switch (op) {
                            case "1":
                                (0, buscarTareas_1.default)(arregloTarea);
                                break;
                            case "0":
                                console.log("Volviendo al menú");
                                break;
                            default:
                                console.error("Ingrese una de las opciones");
                        }
                        pause.run();
                        console.clear();
                    } while (op !== "0");
                }
                else {
                    console.error("No hay tareas cargadas");
                }
                break;
            case "3": // Agregar Tareas
                (0, agregarTareas_1.addTask)(arregloTarea);
                break;
            case "0":
                console.log("¡Nos vemos!!!");
                break;
            default:
                console.error("Ingrese una opción correcta");
        }
        pause.run();
        console.clear();
    } while (opciones !== "0");
}
main();
