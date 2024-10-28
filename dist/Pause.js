import promptSync from 'prompt-sync';
// Crear una clase en lugar de una función
export default class Pausa {
    constructor() {
        this.leer = promptSync();
    }
    run() {
        this.leer("Presione la tecla [ENTER] para continuar...");
    }
}
