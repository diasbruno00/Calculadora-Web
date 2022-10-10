
console.log("teste");

let lista = [2,3,4,5,4,7,4];

console.log(lista)

for (let index = 0; index < lista.length; index++) {

    let resultado = lista[index] * 2;
    let maior 
         if(resultado == 14 ){
            maior = resultado * 24 ;
    }
    console.log(maior)
    
}

 let x = somar(2,3);
 console.log(x);

function somar ( numero, numero2){
    return numero + numero2 ;
}
function divisao (numero, numero2){
    return numero / numero2;
}

function calcularSoma(){

    let num1 = document.getElementById("numero1").value
    let num2= document.getElementById("numero2").value
    let resultado =   parseInt(num1) + parseInt(num2)  ;
    let elemResult = document.getElementById("resultado")  
    elemResult.textContent = "O resultado de  " +  num1 + "+"  + num2 + ": " + resultado

    return resultado
   

}


function calcularSubtracao(){

    let num1 = document.getElementById("numero1").value
    let num2= document.getElementById("numero2").value
    let resultado =   parseInt(num1) - parseInt(num2)  ;
    let elemResult = document.getElementById("resultado")  
    elemResult.textContent = "O resultado de  " +  num1 + "-"  + num2 + ": " + resultado
   
    return resultado

}

function calcularMultiplicacao(){

    let num1 = document.getElementById("numero1").value
    let num2= document.getElementById("numero2").value
    let resultado =   parseInt(num1) * parseInt(num2)  ;
    let elemResult = document.getElementById("resultado")  
    elemResult.textContent = "O resultado de  " +  num1 + "*"  + num2 + ": " + resultado
   
    return resultado

}

function calcularDivisao(){

    let num1 = document.getElementById("numero1").value
    let num2= document.getElementById("numero2").value
    let resultado =   parseInt(num1) / parseInt(num2)  ;
    let elemResult = document.getElementById("resultado")  
    elemResult.textContent = "O resultado de  " +  num1 + "/"  + num2 + ": " + resultado
   
    return resultado

}
