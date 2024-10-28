export default function mostrarDetalles(arregloTarea: any) {
    console.log(`Título: ${arregloTarea['titulo']}`);
    console.log(`Descripción: ${arregloTarea['descripcion']}`);
    console.log(`Estado: ${arregloTarea['estado']}`);
    console.log(`Fecha de Creación: ${arregloTarea['fechaCreacion']}`);
    console.log(`Última Edición: ${arregloTarea['fechaUltimaEdicion']}`);
    console.log(`Vencimiento: ${arregloTarea['fechaVencimiento']}`);
    console.log(`Dificultad: ${arregloTarea['dificultad']}`);
}