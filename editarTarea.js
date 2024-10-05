import promptSync from 'prompt-sync';
const prompt = promptSync();
export function editarTarea(tarea) {
    console.log("Editando tarea");
    // Usar notación de arreglo para acceder a las propiedades
    let nuevoTitulo = prompt("Nuevo título (dejar en blanco para mantener el actual):");
    if (nuevoTitulo)
        tarea['titulo'] = nuevoTitulo;
    let nuevaDescripcion = prompt("Nueva descripción (dejar en blanco para mantener el actual):");
    if (nuevaDescripcion)
        tarea['descripcion'] = nuevaDescripcion;
    let nuevoEstado = prompt("Nuevo estado (Pendiente, En curso, Terminada, Cancelada):");
    while (nuevoEstado && ['pendiente', 'en curso', 'terminada', 'cancelada'].indexOf(nuevoEstado.trim().toLowerCase()) === -1) {
        console.log("Ingrese uno de los estados válidos: Pendiente, En curso, Terminada, Cancelada.");
        nuevoEstado = prompt("Nuevo estado: ");
    }
    if (nuevoEstado)
        tarea['estado'] = nuevoEstado.trim().toLowerCase();
    let nuevaDificultad = prompt("Nueva dificultad (1: Fácil, 2: Medio, 3: Difícil):");
    while (nuevaDificultad && (isNaN(parseInt(nuevaDificultad)) || parseInt(nuevaDificultad) < 1 || parseInt(nuevaDificultad) > 3)) {
        console.log("Dificultad inválida. Por favor, ingrese un número entre 1 y 3");
        nuevaDificultad = prompt("Nueva dificultad: ");
    }
    if (nuevaDificultad)
        tarea['dificultad'] = parseInt(nuevaDificultad);
    tarea['fechaUltimaEdicion'] = new Date().toISOString();
    console.log("Tarea editada correctamente");
}
