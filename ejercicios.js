// ===== 1. TERRENO RECTANGULAR =====
let base = Number(prompt("Ingrese la base del terreno:"));
let altura = Number(prompt("Ingrese la altura del terreno:"));

let area = base * altura;
let perimetro = 2 * (base + altura);

alert("RESULTADOS TERRENO:" +
      "Área : " + area +
      "Perímetro : " + perimetro);

// Solicitar la primera nota al usuario
let nota1 = Number(prompt("Ingrese la primera nota:"));

// Solicitar la segunda nota al usuario
let nota2 = Number(prompt("Ingrese la segunda nota:"));

// Solicitar la tercera nota al usuario
let nota3 = Number(prompt("Ingrese la tercera nota:"));

// Calcular el promedio de las tres notas
let promedio = (nota1 + nota2 + nota3) / 3;

// Mostrar el resultado final en una ventana emergente
alert("PROMEDIO DEL ESTUDIANTE: " + promedio);

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