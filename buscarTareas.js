"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = buscarTarea;
var prompt_sync_1 = require("prompt-sync");
var Pause_1 = require("./Pause.js");
var mostrarDetalles_1 = require("./mostrarDetalles.js");
var editarTareas_1 = require("./editarTareas.js");
var pause = new Pause_1.default();
var leer = (0, prompt_sync_1.default)();
function buscarTarea(tareas) {
    var palabraClave = leer("Ingrese una palabra o conjunto de palabras para buscar en los títulos de las tareas: ");
    var resultados = []; // Define el tipo de resultados
    // Recorro el arreglo
    for (var i = 0; i < tareas.length; i++) {
        var titulo = tareas[i].titulo;
        var coincidenciaEncontrada = false;
        // Comprueba si el título contiene la palabra clave
        for (var j = 0; j <= titulo.length - palabraClave.length; j++) {
            var coincide = true;
            // Compara carácter por carácter
            for (var k = 0; k < palabraClave.length; k++) {
                if (titulo[j + k] !== palabraClave[k]) {
                    coincide = false;
                    break; // Sale si hay una diferencia
                }
            }
            if (coincide) {
                resultados.push(tareas[i]);
                coincidenciaEncontrada = true; // Marca que se encontró una coincidencia
                break; // Sale del bucle si se encontró una coincidencia
            }
        }
    }
    // Mostrar resultados
    console.clear();
    if (resultados.length > 0) {
        console.log("Tareas encontradas:");
        for (var i = 0; i < resultados.length; i++) {
            console.log("".concat(i + 1, ". ").concat(resultados[i].titulo));
        }
        var ver = leer("¿Desea ver alguna tarea? s/n: ").toUpperCase();
        while (ver !== "S" && ver !== "N") {
            ver = leer("Ingrese S o N: ").toUpperCase();
        }
        if (ver === "S") {
            var indice = leer("Ingrese el número de la tarea: "); // Asegúrate de que sea un string primero
            var indiceNumero = parseInt(indice) - 1; // Convierte a número aquí
            // Verificación del índice ingresado
            if (isNaN(indiceNumero) || indiceNumero < 0 || indiceNumero >= resultados.length) {
                console.error("Número de tarea inválido. Ingrese un número correcto.");
                return;
            }
            else {
                (0, mostrarDetalles_1.default)(resultados[indiceNumero]);
                var elegir = leer("Ingrese E para editar o 0 para volver: ").toUpperCase();
                if (elegir === "E") {
                    console.log("Ingresando al menú de editar tareas...");
                    console.log("Est\u00E1s editando la tarea: ".concat(resultados[indiceNumero].titulo));
                    (0, editarTareas_1.edicion)(resultados[indiceNumero]); // lo mando al menú de edición de tarea
                }
                else {
                    if (elegir !== "E" && elegir !== "0") {
                        console.error("Tiene que ingresar E o 0: ");
                        pause.run();
                        return;
                    }
                }
            }
        }
    }
    else {
        console.log("No se encontraron tareas que coincidan con la búsqueda.");
    }
}
