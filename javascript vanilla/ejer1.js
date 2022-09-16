class Persona {
    nombre = '';
    edad = 0;
    dni = '';
    sexo = 'Hombre';

    constructor(nombre,edad,dni,sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
    }
}

instantiate();

function instantiate() {
    let persona1 = new Persona('Juan', 22, '123A', 'Hombre');
    let persona2 = new Persona('Maria', 32, '12345A', 'Mujer');
    let persona3 = new Persona('Antonia', 42, '123456A', 'Mujer');

    console.log(persona1, persona2, persona3);
}