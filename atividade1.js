var quantidadedeMulheres = 0;
var quantidadedeHomens = 0;
var totalAlturaHomens = 0;
var mediaAlturaHomens = "Nenhum homem informado!";
var maiorAltura = 0;
var menorAltura = 0;

for (var i = 0; i<4; i++) {

    var sexo = prompt("Qual o sexo?");
    var altura = parseFloat(prompt("Qual a altura?"));

    if (i == 0){
        menorAltura = altura;
        maiorAltura = altura;
    } else {

        if (altura > maiorAltura) {
            maiorAltura = altura;

    } 

    if (altura <menorAltura) {
        menorAltura = menorAltura;
        } 
    }

    if (sexo.toUpperCase() == "F"){
        quantidadedeMulheres = quantidadedeMulheres +1;
    } else{
        quantidadedeHomens = quantidadedeHomens + 1;
        totalAlturaHomens = totalAlturaHomens + altura;
    
    }
if (quantidadedeHomens > 0) {
    mediaAlturaHomens = (totalAlturaHomens/quantidadedeHomens).toFixed(2); 
}


console.log("A quantidade de mulheres é: " + quantidadedeMulheres);
console.log("A média das alturas dos homens é: " + mediaAlturaHomens);
console.log("A menor altura é: " +menorAltura + "Maior Altura: " + maiorAltura);