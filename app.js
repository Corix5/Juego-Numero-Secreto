let numeroSecreto = 0;
let intentos = 0;
let numerosGenerados = [];
let numeroMaximo = 10;

function condicionesIniciales() {
  asignarTextoElemento("h1", "¡Juego del número secreto");
  asignarTextoElemento("p", `Indica un número entre 1 y ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${
        intentos > 1 ? "intentos" : "intento"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento(
        "p",
        `El número secreto es menor, intentos: ${intentos}`
      );
    } else {
      asignarTextoElemento(
        "p",
        `El número secreto es mayor, intentos: ${intentos}`
      );
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
  return;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  //Si el array de numerosGenerados llega al numeroMaximo, se reinicia
  if (numerosGenerados.length === numeroMaximo) {
    numerosGenerados = [];
  } else {
    //Si el numero generado está incluido en el array de numerosGenerados, se vuelve a generar
    if (numerosGenerados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      numerosGenerados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  // indicar mensaje de intervalos
  condicionesIniciales(); //Deshabilitar el boton de nuevo juego
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
