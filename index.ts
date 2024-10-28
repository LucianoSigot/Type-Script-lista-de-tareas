
import prompt from 'prompt-sync';
import Pausa from './Pause.js'; 
import verMenu from './Menu.js';
import { addTask } from './agregarTareas.js';
import { mostrarTodasTareas } from './todasTareas.js';
import { menuBuscarTareas } from './Menu.js';
import buscarTarea from './buscarTareas.js';

// Definir tipo para las tareas
interface Tarea {
    titulo: string;
    descripcion: string;
    estado: string;
    fechaCreacion: Date;
    fechaUltimaEdicion: string;
    dificultad: string;
    fechaVencimiento: string;
}

const pause = new Pausa(); // Instancia de la clase Pausa
const leer = prompt();
export const arregloTarea: Tarea[] = [];  // Arreglo de tareas con el tipo Tarea

function darNombre(): string {
    let nombre: string;
    do {
        nombre = leer("Ingrese su nombre: ");
        if (!nombre.trim()) {
            console.error("Ingrese un nombre distinto de vacío.");
        }
    } while (!nombre.trim());
    return nombre;
}

function main(): void {
    const nombre = darNombre();
    let opciones: string;
    console.log(`¡Bienvenido ${nombre} a su sistema de lista de tareas!!!`);
    pause.run();
    console.clear();

    do {
        verMenu();
        opciones = leer("Ingrese una opción: ");
        switch (opciones) {
            case "1": // Mostrar Todas las tareas
                mostrarTodasTareas(arregloTarea);
                break;
            case "2": // Buscar Tareas
                if (arregloTarea.length > 0) {
                    let op: string;
                    do {
                        menuBuscarTareas();
                        op = leer("Seleccione una opción: ");
                        switch (op) {
                            case "1":
                                buscarTarea(arregloTarea);
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
                } else {
                    console.error("No hay tareas cargadas");
                }
                break;
            case "3": // Agregar Tareas
                addTask(arregloTarea);
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
