class Electrodomestico {
  precio_base = 100;
  color = "blanco";
  consumo_energetico = "F";
  peso = 5;

  constructor(precio_base, color, consumo_energetico, peso) {
    this.precio_base = precio_base;
    this.color = color;
    this.consumo_energetico = consumo_energetico;
    this.peso = peso;
  }

  getPrecioBase() {
    return this.precio_base;
  }

  getColor() {
    return this.color;
  }

  getConsumo() {
    return this.consumo_energetico;
  }

  getPeso() {
    return this.peso;
  }

  comprobarConsumoEnergetico(letra) {
    let letras_array = letras();
    return letras_array.includes(letra.toUpperCase(letra));
  }

  comprobarColor(color) {
    let colores_array = colores();
    return colores_array.includes(color.toLowerCase(color));
  }

  precioFinal() {
    let precio_final = 0;
    switch (this.consumo_energetico) {
      case "A":
        precio_final += 100;
        break;

      case "B":
        precio_final += 80;
        break;

      case "C":
        precio_final += 60;
        break;

      case "D":
        precio_final += 50;
        break;

      case "E":
        precio_final += 30;
        break;

      case "F":
        precio_final += 10;
        break;
    }

    if (this.peso >= 0 && this.peso <= 19) {
      precio_final += 10;
    }

    if (this.peso >= 20 && this.peso <= 49) {
      precio_final += 50;
    }

    if (this.peso >= 50 && this.peso <= 79) {
      precio_final += 80;
    }

    if (this.peso >= 80) {
      precio_final += 100;
    }

    return precio_final;
  }
}

function colores() {
  return ["blanco", "negro", "rojo", "azul", "gris"];
}

function letras() {
  return ["A", "B", "C", "D", "E", "F"];
}

const carga_defecto = 5;

class Lavadora extends Electrodomestico {
  carga = carga_defecto;

  constructor(carga) {
    this.carga = carga;
  }

  getCarga() {
    return this.carga;
  }

  precioFinal() {
    let precio_final = 0;
    precio_final = super.precioFinal();

    if (this.carga > 30) {
      return (precio_final += 50);
    } else {
      return precio_final;
    }
  }
}

class Television extends Electrodomestico {
  resolucion = 20;
  cuatroK = false;

  constructor(resolucion, cuatroK) {
    this.resolucion = resolucion;
    this.cuatroK = cuatroK;
  }

  precioFinal() {
    let precio_final = 0;
    precio_final = super.precioFinal();

    if (this.resolucion > 40) {
      precio_final += precio_final * 1.3;
    }
    if (this.cuatroK) {
      precio_final += 50;
    }

    return precio_final;
  }
}

class mainApp {
  crearArrayLavadoras() {
    let arr_lavadora = [];
    for (let i = 1; i <= 5; i++) {
      let lava = new Lavadora((carga = 1));
      arr_lavadora.push(lava);
    }
    console.log(arr_lavadora);
    return arr_lavadora;
  }

  crearArrayTelevisores() {
    let arr_televisor = [];
    for (let i = 1; i <= 5; i++) {
      arr_televisor.push(new Television(Math.floor(Math.random() * 100), true));
    }

    console.log(arr_televisor);
    return arr_televisor;
  }
}

let iniciar = new mainApp();
iniciar.crearArrayLavadoras();
iniciar.crearArrayTelevisores();
