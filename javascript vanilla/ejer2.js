class Password {
  longitud = 8;
  contraseña;

  constructor(longitud, contraseña) {
    this.longitud = longitud;
    this.contraseña = contraseña;
  }
}
randomPassword();

function randomPassword() {
  let r = (Math.random() + 1).toString(36).slice(0, 8);
  console.log(r);
}
