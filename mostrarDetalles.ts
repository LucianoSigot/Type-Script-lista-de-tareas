export function mostrarDetalles(tarea: any): void {
    console.log(`Título: ${tarea.titulo}`);
    console.log(`Descripción: ${tarea.descripcion || 'Sin descripción'}`);
    console.log(`Estado: ${tarea.estado}`);
    console.log(`Fecha de Creación: ${tarea.fechaCreacion}`);
    console.log(`Última Edición: ${tarea.fechaUltimaEdicion || 'No se ha editado'}`);
    console.log(`Vencimiento: ${tarea.vencimiento || 'Sin vencimiento'}`);
    console.log(`Dificultad: ${tarea.dificultad === 1 ? '⭐' : tarea.dificultad === 2 ? '⭐⭐' : '⭐⭐⭐'}`);
  }
