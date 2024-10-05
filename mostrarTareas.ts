import promptSync from 'prompt-sync';
import { mostrarDetalles } from './mostrarDetalles.js';
import { editarTarea } from './editarTarea.js';

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

export function mostrarTodasTareas(aTareas: Tarea[]): void {
  console.log("Estas son todas tus tareas:");
  for (let i = 0; i < aTareas.length; i++) {
    console.log(`${i + 1}. ${aTareas[i]['titulo']}`); 
  }
  console.log("0. Para volver al menú principal");
  let opcion = prompt("Ingrese el número de la tarea que desea ver:");
  if (parseInt(opcion) < 1 || parseInt(opcion) >= aTareas.length + 1) {
    console.error("Índice de tarea no válido");
    return;
  }
  if (opcion === "0") {
    console.log("Volviendo al menú principal...");
  } else {
    let tarea = aTareas[parseInt(opcion) - 1];
    if (tarea) {
      mostrarDetalles(tarea);
      let editar = prompt("¿Desea editar esta tarea? (s/n): ");
      if (editar.toLowerCase() !== "s" && editar.toLowerCase() !== "n") {
        console.error("Respuesta no válida");
        return;
      }
      if (editar.toLowerCase() === 's') {
        editarTarea(tarea);
      }
    } else {
      console.log("Tarea no encontrada");
    }
  }
}

export function mostrarTareasPendientes(aTareas: Tarea[]): void {
  console.log("Tareas pendientes:");
  let hayTareasPendientes = false; //  verifica si hay tareas pendientes
  
  for (let i = 0; i < aTareas.length; i++) {
    if (aTareas[i]['estado'].toLowerCase() === "pendiente") {
      console.log(`${i + 1}. ${aTareas[i]['titulo']}`); 
      hayTareasPendientes = true; // Actualizar la bandera
    }
  }

  if (!hayTareasPendientes) {
    console.log("No hay tareas pendientes");
  } else {
    console.log("0 para volver al menú principal");
    let opcion = prompt("Ingrese un número para ver la tarea que desea ver:");
    if (parseInt(opcion) < 1 || parseInt(opcion) >= aTareas.length + 1) {
      console.error("Índice de tarea no válido");
      return;
    }

    if (opcion === "0") {
      console.log("Volviendo al menú principal...");
    } else {
      let tarea = aTareas[parseInt(opcion) - 1];
      if (tarea) {
        mostrarDetalles(tarea);
        let editar = prompt("¿Desea editar esta tarea? (s/n): ");
        if (editar.toLowerCase() !== "s" && editar.toLowerCase() !== "n") {
          console.error("Respuesta no válida");
          return;
        }
        if (editar.toLowerCase() === 's') {
          editarTarea(tarea);
        }
      } else {
        console.log("Tarea no encontrada");
      }
    }
  }
}

export function mostrarTareasEnCurso(aTareas: Tarea[]): void {
  console.log("Tareas en curso:");
  let hayTareasEnCurso = false; // verifica si hay tareas en curso
  
  for (let i = 0; i < aTareas.length; i++) {
    if (aTareas[i]['estado'].toLowerCase() === "en curso") {
      console.log(`${i + 1}. ${aTareas[i]['titulo']}`);
      hayTareasEnCurso = true; // Actualizar la bandera
    }
  }

  if (!hayTareasEnCurso) {
    console.log("No hay tareas en curso");
  } else {
    console.log("0 para volver al menú principal");
    let opcion = prompt("Ingrese un número para ver la tarea que desea ver:");
    if (parseInt(opcion) < 1 || parseInt(opcion) >= aTareas.length + 1) {
      console.error("Índice de tarea no válido");
      return;
    }

    if (opcion === "0") {
      console.log("Volviendo al menú principal...");
    } else {
      let tarea = aTareas[parseInt(opcion) - 1];
      if (tarea) {
        mostrarDetalles(tarea);
        let editar = prompt("¿Desea editar esta tarea? (s/n): ");
        if (editar.toLowerCase() !== "s" && editar.toLowerCase() !== "n") {
          console.error("Respuesta no válida");
          return;
        }
        if (editar.toLowerCase() === 's') {
          editarTarea(tarea);
        }
      } else {
        console.log("Tarea no encontrada");
      }
    }
  }
}

export function mostrarTareasTerminadas(aTareas: Tarea[]): void {
  console.log("Tareas terminadas:");
  let hayTareasTerminadas = false; //  verifica si hay tareas terminadas
  
  for (let i = 0; i < aTareas.length; i++) {
    if (aTareas[i]['estado'].toLowerCase() === "terminada") {
      console.log(`${i + 1}. ${aTareas[i]['titulo']}`); 
      hayTareasTerminadas = true; // Actualizar la bandera
    }
  }

  if (!hayTareasTerminadas) {
    console.log("No hay tareas terminadas");
  } else {
    console.log("0 para volver al menú principal");
    let opcion = prompt("Ingrese un número para ver la tarea que desea ver:");
    if (parseInt(opcion) < 1 || parseInt(opcion) >= aTareas.length + 1) {
      console.error("Índice de tarea no válido");
      return;
    }

    if (opcion === "0") {
      console.log("Volviendo al menú principal...");
    } else {
      let tarea = aTareas[parseInt(opcion) - 1];
      if (tarea) {
        mostrarDetalles(tarea);
        let editar = prompt("¿Desea editar esta tarea? (s/n): ");
        if (editar.toLowerCase() !== "s" && editar.toLowerCase() !== "n") {
          console.error("Respuesta no válida");
          return;
        }
        if (editar.toLowerCase() === 's') {
          editarTarea(tarea);
        }
      } else {
        console.log("Tarea no encontrada");
      }
    }
  }
}
