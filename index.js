const button2 = document.getElementById("btn-ej2");
const button3 = document.getElementById("btn-ej3");
const button4 = document.getElementById("btn-ej4");
const button5 = document.getElementById("btn-ej5");

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function kelvin(c) {
  return c + 273.15;
}

function fahrenheit(c) {
  return c * (9 / 5) + 32;
}

function sumar5(a, b, c, d, e) {
  return a + b + c + d + e;
}

function promedio(a) {
  return a / 5;
}

function contDias(dias) {
  let anos = dias / 365;
  let semanas = (dias % 365) / 7;
  let days = semanas % 7;
  return [anos, semanas, days];
}

button2.addEventListener("click", (event) => {
  let select = document.getElementById("select2").value;
  let field1 = +prompt("Ingresa el primer número");
  let field2 = +prompt("Ingresa el segundo número");
  let result = document.querySelector(".result2");

  if (select == "suma") {
    result.innerHTML = `Elegiste ${select} y el resultado es ${sumar(
      field1,
      field2
    )}`;
  } else if (select == "resta") {
    result.innerHTML = `Elegiste ${select} y el resultado es  ${restar(
      field1,
      field2
    )}`;
  } else if (select == "multiplicacion") {
    result.innerHTML = `Elegiste ${select} y el resultado es ${multiplicar(
      field1,
      field2
    )}`;
  } else if (select == "division") {
    result.innerHTML = `Elegiste ${select} y el resultado es ${dividir(
      field1,
      field2
    )}`;
  } else if (select == "modulo") {
    result.innerHTML = `Elegiste ${select} y el resultado es ${modulo(
      field1,
      field2
    )}`;
  }
});

button3.addEventListener("click", (event) => {
  let valor = +prompt("Ingrese una temperatura en grados celcius");
  let result = document.querySelector(".result3");

  result.innerHTML = `La temperatura ingresada corresponde a ${Math.round(
    kelvin(valor)
  )} Kelvin y a ${Math.floor(fahrenheit(valor))} Farenheit.`;
});

button4.addEventListener("click", (event) => {
  let valor = +prompt("Ingrese un número de días");
  let dias = contDias(valor);
  let result = document.querySelector(".result4");

  result.innerHTML = `La cantidad de días ingresados corresponde(n) a ${Math.floor(
    dias[0]
  )} año(s), ${Math.floor(dias[1])} semana(s) y ${Math.floor(dias[2])} día(s).`;
});

button5.addEventListener("click", (event) => {
  let valor1 = +prompt("Ingrese un primer numero");
  let valor2 = +prompt("Ingrese un segundo numero");
  let valor3 = +prompt("Ingrese un tercer numero");
  let valor4 = +prompt("Ingrese un cuardo numero");
  let valor5 = +prompt("Ingrese un quinto numero");
  let result = document.querySelector(".result5");

  result.innerHTML = ` El resultado de la suma de los números es ${sumar5(
    valor1,
    valor2,
    valor3,
    valor4,
    valor5
  )} y el promedio es ${promedio(
    sumar5(valor1, valor2, valor3, valor4, valor5)
  )}`;
});
