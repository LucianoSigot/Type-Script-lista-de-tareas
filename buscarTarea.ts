import promptSync from 'prompt-sync';
import { mostrarDetalles } from './mostrarDetalles.js';

const prompt = promptSync();

interface Tarea {
  titulo: string;
  descripcion: string;
  estado: string;
  fechaCreacion: string;
  fechaUltimaEdicion: string;
  vencimiento: string;
  dificultad: number;
}

// Función para mostrar un mensaje de error personalizado
function mostrarError(mensaje: string): void {
  console.error('Error: ' + mensaje);
}

// Función para validar la entrada del usuario
function validarEntrada(entrada: string): boolean {
  return entrada.trim() !== '';
}

export function buscarTarea(aTareas: Tarea[]): void {
  
  // Pide al usuario que ingrese el título o parte del mismo para buscar la tarea
  let busqueda: string = prompt("Ingrese el título o parte del mismo para buscar la tarea:");
  if (!validarEntrada(busqueda)) {
    mostrarError('Debe ingresar un título o parte del mismo para buscar la tarea.');
    return;
  }

  busqueda = busqueda.toLowerCase();
  let resultados: Tarea[] = [];
  const longitudBusqueda = busqueda.length;

  // Búsqueda usando un bucle
  for (let i = 0; i < aTareas.length; i++) {
    let titulo = aTareas[i]['titulo'].toLowerCase();
    let encontrado = false;

    // Verificación manual de si el término de búsqueda está contenido en el título
    if (titulo.length >= longitudBusqueda) {
      for (let j = 0; j <= titulo.length - longitudBusqueda; j++) {
        let coincide = true;

        for (let k = 0; k < longitudBusqueda; k++) {
          if (titulo[j + k] !== busqueda[k]) {
            coincide = false;
            break;
          }
        }

        if (coincide) {
          resultados.push(aTareas[i]);
          encontrado = true;
          break;  // Detener el ciclo interno una vez encontrada la coincidencia
        }
      }
    }
  }

  if (resultados.length > 0) {
    // Mostrar los resultados sin usar funciones como forEach o console.log con plantillas de literales
    console.log('**Resultados de búsqueda para "' + busqueda + '":**');
    for (let i = 0; i < resultados.length; i++) {
      let index = i + 1;
      let titulo = resultados[i].titulo;
      
      // Imprimir el índice y el título de cada tarea
      console.log(index + '. ' + titulo);
    }

    console.log("0 para volver al menú");

    // Pide al usuario que ingrese el número de la tarea que desea ver
    let opcion: string = prompt("Ingrese el número de la tarea que desea ver:");
    if (opcion === "0") {
      // Vuelve al menú principal
      console.log("Volviendo al menú principal...");
    } else {
      // Verifica si el índice ingresado por el usuario es válido
      let numeroOpcion = parseInt(opcion);
      if (numeroOpcion < 1 || numeroOpcion > resultados.length) {
        mostrarError('Índice inválido. Debe ingresar un número entre 1 y ' + resultados.length);
        return;
      }

      // Muestra la tarea en la posición seleccionada
      let tarea: Tarea = resultados[numeroOpcion - 1];
      if (tarea) {
        mostrarDetalles(tarea);
      } else {
        mostrarError("Tarea no encontrada");
      }
    }
  } else {
    mostrarError('No se encontraron tareas que coincidan con la búsqueda.');
  }
}
