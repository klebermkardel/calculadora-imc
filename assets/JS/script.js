function calcularIMC() {
    // Obter valores do formulário
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    
    // Calcular IMC
    var imc = peso / (altura * altura);

    // Exibir resultado na tela
    
    if (imc < 18.5) {
        document.getElementById("resultado").innerHTML = 'Seu IMC é: ' + imc.toFixed(1);
        document.getElementById("grau").innerHTML = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        document.getElementById("resultado").innerHTML = 'Seu IMC é: ' + imc.toFixed(1);
        document.getElementById("grau").innerHTML = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        document.getElementById("resultado").innerHTML = 'Seu IMC é: ' + imc.toFixed(1);
        document.getElementById("grau").innerHTML = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        document.getElementById("resultado").innerHTML = 'Seu IMC é: ' + imc.toFixed(1);
        document.getElementById("grau").innerHTML = "Obesidade Grau I";
    } else if (imc >= 35 && imc < 40) {
        document.getElementById("resultado").innerHTML = 'Seu IMC é: ' + imc.toFixed(1);
        document.getElementById("grau").innerHTML = "Obesidade Grau II";
    } else {
        document.getElementById("resultado").innerHTML = 'Seu IMC é: ' + imc.toFixed(1);
        document.getElementById("grau").innerHTML = "Obesidade Grau III";
    }
}

function limpar() {
    document.getElementById("meu-form").reset();
}