let cpf = '705.484.450-52';





let cpfLimpo = cpf.replace(/\D+/g, '');

cpfArray  = Array.from(cpfLimpo);

// retirando os 2 últimos dígitos.

let cpfCalc = cpfArray.slice(0, -2)


num1 = 11;
const calculo = cpfCalc.map(function (valor) {
 
 return valor * --num1;
    
});

const soma = calculo.reduce(function(acumulador, valor){
    return acumulador + valor;
}, 0);

const verifDigito1 = 11 - (soma % 11);




function verificaResto (valor) {
    if (valor > 9 ) {
        return 0 
    } else return valor
}

const verificado1 = verificaResto(verifDigito1);

cpfCalc.push(verifDigito1);



num1 = 12;
const calculo2 = cpfCalc.map(function (valor) {
 
 return valor * --num1;
    
});

const soma2 = calculo2.reduce(function(acumulador, valor){
    return acumulador + valor;
}, 0);


const verifDigito2 = 11 - (soma2 % 11);

const verificado2 = verificaResto(verifDigito2);


cpfCalc.push(verificado2);



function verifyCPF(valor1 , valor2) {

    if(valor1 === valor2) {
        return console.log('CPF válido');
    }else return console.log('CPF inválido');
}

//verifyCPF(cpf, cpfCalc);


let cpfLimpo2 = cpfCalc.toString().replace(/\D+/g, '');



verifyCPF(cpfLimpo, cpfLimpo2);

//console.log(cpfLimpo)
//console.log(cpfLimpo2)