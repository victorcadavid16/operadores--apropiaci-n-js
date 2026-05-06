// ===== 1. TERRENO RECTANGULAR =====
let base = Number(prompt("Ingrese la base del terreno:"));
let altura = Number(prompt("Ingrese la altura del terreno:"));

let area = base * altura;
let perimetro = 2 * (base + altura);

alert("RESULTADOS TERRENO:" +
      "Área : " + area +
      "Perímetro : " + perimetro);

