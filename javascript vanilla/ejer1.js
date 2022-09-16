class Persona {
    nombre = '';
    edad = 0;
    dni = '';
    sexo = 'Hombre';
}

function instantiate() {
    let persona1 = new Persona('Juan', 22, '123A', 'Hombre');
    let persona2 = new Persona('Maria', 32, '12345A', 'Mujer');
    let persona3 = new Persona('Antonia', 42, '123456A', 'Mujer');
}