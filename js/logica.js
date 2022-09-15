function calc(valor) {
  document.getElementById("barra-calc").value += valor;
}

function execute() {
  let operacion = document.getElementById("barra-calc").value;
  let resultado = Function("return " + operacion)();
  document.getElementById("barra-calc").value = resultado;
}

function clean() {
  document.getElementById("barra-calc").value = "";
  console.log("borro");
}
