"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mostrarDetalles;
function mostrarDetalles(arregloTarea) {
    console.log("T\u00EDtulo: ".concat(arregloTarea['titulo']));
    console.log("Descripci\u00F3n: ".concat(arregloTarea['descripcion']));
    console.log("Estado: ".concat(arregloTarea['estado']));
    console.log("Fecha de Creaci\u00F3n: ".concat(arregloTarea['fechaCreacion']));
    console.log("\u00DAltima Edici\u00F3n: ".concat(arregloTarea['fechaUltimaEdicion']));
    console.log("Vencimiento: ".concat(arregloTarea['fechaVencimiento']));
    console.log("Dificultad: ".concat(arregloTarea['dificultad']));
}
