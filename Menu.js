"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = verMenu;
exports.menuTareas = menuTareas;
exports.menuAddTareas = menuAddTareas;
exports.menuBuscarTareas = menuBuscarTareas;
var prompt_sync_1 = require("prompt-sync");
var leer = (0, prompt_sync_1.default)();
function verMenu() {
    console.log("******************************");
    console.log("*          📋 MENU           *");
    console.log("******************************");
    console.log("¿Qué deseas hacer?");
    console.log("[1] Ver mis tareas");
    console.log("[2] Buscar una tarea");
    console.log("[3] Agregar una tarea");
    console.log("[0] Salir");
}
function menuTareas() {
    console.log("******************************");
    console.log("*          📋 Tareas          *");
    console.log("******************************");
    console.log("¿Qué deseas hacer?");
    console.log("[1] Ver todas mis tareas");
    console.log("[2] Pendientes");
    console.log("[3] En curso");
    console.log("[4] Terminadas");
    console.log("[0] Salir...");
}
function menuAddTareas() {
    console.log("******************************");
    console.log("*          📋 Agregar Tareas          *");
    console.log("******************************");
    console.log("[1] Agregar título (*obligatorio)");
    console.log("[2] Agregar descripción (opcional)");
    console.log("[3] Agregar dificultad (Fácil, media, difícil), por default (fácil) ");
    console.log("[4] Para ingresar un estado (Pendiente, En curso, Terminada), por default (Pendiente)");
    console.log("[5] Agregar Fecha de vencimiento (opcional)");
    console.log("[6] Guardar la tarea (Cuando se guarda la tarea te manda al menú principal)");
    console.log("[0] Volver al menú (Si no se cargan los campos obligatorios no se guardará la tarea)...");
}
function menuBuscarTareas() {
    console.log("=== Menú de Buscar Tarea ===");
    console.log("Seleccione una opción:");
    console.log("1. Buscar por título");
    console.log("0. Volver al menú principal");
}
