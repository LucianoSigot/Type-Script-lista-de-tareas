import prompt from 'prompt-sync';
import pausa from './Pause.js';
const leer = prompt();
const pause = new pausa();
export function edicion(tarea) {
    let opciones;
    do {
        console.log("\n-Si deseas mantener los valores de un atributo, déjalo en blanco.");
        console.log("-Si deseas dejar un atributo en blanco, escribe un espacio.");
        console.log("[1] Título (El titulo no se puede dejar en blanco)");
        console.log("[2] Descripción");
        console.log("[3] Estado ([P]endiente, [E]n curso, [T]erminada, [C]ancelada).");
        console.log("[4] Dificultad ([1] Fácil, [2] Media, [3] Difícil).");
        console.log("[5] Vencimiento");
        console.log("[0] Volver al menú");
        opciones = leer("¿Qué desea editar?: ");
        switch (opciones) {
            case "1":
                let nuevoTitulo = leer("Ingrese el nuevo título: ");
                while (nuevoTitulo.length > 100) {
                    nuevoTitulo = leer("El título no puede tener más de 100 caracteres: ");
                }
                if (nuevoTitulo.trim() !== "") {
                    tarea["titulo"] = nuevoTitulo;
                }
                break;
            case "2":
                let nuevaDescripcion = leer("Ingrese la nueva descripción: ");
                while (nuevaDescripcion.length > 500) {
                    nuevaDescripcion = leer("La descripción no puede tener más de 500 caracteres: ");
                }
                if (nuevaDescripcion.trim() === "") {
                    tarea["descripcion"] = "----";
                }
                else if (nuevaDescripcion !== "") {
                    tarea["descripcion"] = nuevaDescripcion;
                }
                break;
            case "3":
                let estado;
                do {
                    console.log("[P]endiente, [E]n curso, [T]erminada, [C]ancelada.");
                    console.log("No se puede borrar el valor del atributo estado");
                    estado = leer("Ingrese una opción para el estado: ").toUpperCase();
                    if (estado === "") {
                        estado = tarea["estado"];
                    }
                    switch (estado) {
                        case "P":
                            tarea["estado"] = "Pendiente";
                            break;
                        case "E":
                            tarea["estado"] = "En curso";
                            break;
                        case "T":
                            tarea["estado"] = "Terminada";
                            break;
                        case "C":
                            tarea["estado"] = "Cancelada";
                            console.log("La tarea ha sido cancelada.");
                            return "Eliminar";
                        default:
                            console.error("Ingrese una opción válida.");
                    }
                } while (estado !== "P" && estado !== "E" && estado !== "T" && estado !== "C" && estado !== "");
                break;
            case "4":
                let dificultad;
                do {
                    console.log("[1] Fácil, [2] Media, [3] Difícil.");
                    console.log("No se puede borrar el valor del atributo dificultad");
                    dificultad = leer("Ingrese una opción para la dificultad: ");
                    if (dificultad === "1") {
                        tarea["dificultad"] = "★";
                    }
                    else if (dificultad === "2") {
                        tarea["dificultad"] = "★★";
                    }
                    else if (dificultad === "3") {
                        tarea["dificultad"] = "★★★";
                    }
                    else if (dificultad === "") {
                        break;
                    }
                    else {
                        console.error("Ingrese una opción válida.");
                    }
                } while (dificultad !== "1" && dificultad !== "2" && dificultad !== "3");
                break;
            case "5":
                let nuevoVencimiento = leer("Si quiere modificar el atributo vencimiento ingrese cualquier otra cosa: ");
                if (nuevoVencimiento === "") {
                    break;
                }
                if (nuevoVencimiento.trim() !== "") {
                    nuevoVencimiento = obtenerFechaVencimiento();
                }
                if (nuevoVencimiento !== "-------") {
                    tarea["fechaVencimiento"] = nuevoVencimiento;
                }
                else if (nuevoVencimiento.trim() === "") {
                    console.log("dejando el atributo en blanco...");
                    tarea["fechaVencimiento"] = "--------";
                }
                break;
            case "0":
                console.log("Volviendo...");
                break;
            default:
                console.error("Ingrese un número válido.");
        }
        tarea["fechaUltimaEdicion"] = new Date().toISOString();
        console.log("La tarea se ha guardado.");
        pause.run();
        console.clear();
    } while (opciones !== "0");
}
function obtenerFechaVencimiento() {
    let fechaVencimiento = "-------";
    let dia, mes, ano;
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    do {
        ano = leer("Ingrese el año de vencimiento o presione Enter para cancelar: ");
        if (ano === "") {
            return fechaVencimiento;
        }
        if (ano.length !== 4 || isNaN(Number(ano))) {
            console.error("Ingrese un año válido con cuatro dígitos.");
        }
    } while (ano.length !== 4 || isNaN(Number(ano)));
    const esBisiesto = (Number(ano) % 4 === 0 && (Number(ano) % 100 !== 0 || Number(ano) % 400 === 0));
    if (esBisiesto) {
        diasPorMes[1] = 29;
    }
    do {
        mes = leer("Ingrese el mes de vencimiento (01-12) o presione Enter para cancelar: ");
        if (mes === "") {
            return fechaVencimiento;
        }
        if (Number(mes) < 1 || Number(mes) > 12 || isNaN(Number(mes))) {
            console.error("Mes inválido. Ingrese un número entre 01 y 12.");
        }
    } while (Number(mes) < 1 || Number(mes) > 12 || isNaN(Number(mes)));
    do {
        dia = leer(`Ingrese el día de vencimiento (01-${diasPorMes[Number(mes) - 1]}): `);
        if (dia === "") {
            return fechaVencimiento;
        }
        if (Number(dia) < 1 || Number(dia) > diasPorMes[Number(mes) - 1] || isNaN(Number(dia))) {
            console.error(`Día inválido. Ingrese un número entre 01 y ${diasPorMes[Number(mes) - 1]}.`);
        }
    } while (Number(dia) < 1 || Number(dia) > diasPorMes[Number(mes) - 1] || isNaN(Number(dia)));
    fechaVencimiento = `${String(dia).padStart(2, '0')}/${String(mes).padStart(2, '0')}/${ano}`;
    return fechaVencimiento;
}
