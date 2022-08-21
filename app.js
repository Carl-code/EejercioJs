let alumnos = ['Carlos', 'Pedro', 'Lorena', 'Silvia', 'Herculano'];
let nombre = prompt('Ingrese Un Nombre al asar, y le muestro su Posicion');

for(let i = 0; i < alumnos.length; i++) {
    if(alumnos[i]  === nombre) {
        console.log(`Atinaste su Posicion es ${i}`);
        break;
    }else {
        console.log('Alumno no encontrado');
    }
}