"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
// Crear una clase en lugar de una función
var Pausa = /** @class */ (function () {
    function Pausa() {
        this.leer = (0, prompt_sync_1.default)();
    }
    Pausa.prototype.run = function () {
        this.leer("Presione la tecla [ENTER] para continuar...");
    };
    return Pausa;
}());
exports.default = Pausa;
