import promptSync from 'prompt-sync';
const prompt = promptSync();

interface Tarea {
  titulo: string;
  descripcion: string;
  vencimiento: string;
  dificultad: number;
  estado: string;
  fechaCreacion: Date;
  fechaUltimaEdicion: Date | null;
}

export function agregarTarea(aTareas: Tarea[]): void {
  let titulo: string = prompt("Ingrese el título de la tarea:");
  while (!titulo || titulo.trim() === "") {
    console.error("Título no válido");
    titulo = prompt("Ingrese el título de la tarea:");
  }

  let descripcion: string = prompt("Ingrese la descripción de la tarea:");
  while (!descripcion || descripcion.trim() === "") {
    console.error("Descripción no válida");
    descripcion = prompt("Ingrese la descripción de la tarea:");
  }

  let vencimiento: string;
  do {
    vencimiento = prompt("Ingrese la fecha de vencimiento de la tarea (Formato AAAA-MM-DD):");
    if (!vencimiento || vencimiento.trim() === "") {
      console.error("Fecha de vencimiento no válida");
    } else if (!validaDato(vencimiento)) {
      console.error("Fecha de vencimiento no válida, debe ser en formato AAAA-MM-DD");
    } else if (!verificaDia(vencimiento)) {
      console.error("Fecha de vencimiento debe ser mayor o igual a la fecha actual");
    }
  } while (!vencimiento || vencimiento.trim() === "" || !validaDato(vencimiento) || !verificaDia(vencimiento));

  let dificultad: number;
  do {
    dificultad = parseInt(prompt('Ingrese la dificultad de la tarea (1: Fácil, 2: Medio, 3: Difícil):'));
    if (isNaN(dificultad) || dificultad < 1 || dificultad > 3) {
      console.error("Dificultad no válida, debe ser un número entre 1 y 3");
    }
  } while (isNaN(dificultad) || dificultad < 1 || dificultad > 3);

  const tarea: Tarea = {
    titulo,
    descripcion,
    vencimiento,
    dificultad,
    estado: 'Pendiente',
    fechaCreacion: new Date(),
    fechaUltimaEdicion: null
  };

  aTareas.push(tarea);
  console.log("Tarea agregada correctamente");
}

function validaDato(cadena: string): boolean {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(cadena);
}

function verificaDia(cadena: string): boolean {
  const hoy = new Date();
  const vencimientoDato = new Date(cadena);
  return vencimientoDato >= hoy;
}
