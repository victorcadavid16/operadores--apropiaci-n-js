// ===== 1. TERRENO RECTANGULAR =====
let base = Number(prompt("Ingrese la base del terreno:"));
let altura = Number(prompt("Ingrese la altura del terreno:"));

let area = base * altura;
let perimetro = 2 * (base + altura);

alert("RESULTADOS TERRENO:" +
      "Área : " + area +
      "Perímetro : " + perimetro);

// Contador inicial
let visitas = 100;

// Se agregan 25 visitas
visitas = visitas + 25;

// Se pierden 10 visitas
visitas = visitas - 10;

// Se duplican las visitas
visitas = visitas * 2;

// Mostrar resultado
alert("El valor final del contador es: " + visitas);

// Operación matemática
let resultado = (20 + 10) / 5 + 3 * 2 - 4;

// Mostrar resultado
alert("El resultado de la operación es: " + resultado);