function meuEscopo(){
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado')

    function recebeEventoForm(evento){
        evento.preventDefault();
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const IMC = imc(peso.value, altura.value);
        const resultadoIMC = avaliaIMC(IMC);
        
        if((peso.value > 5 && peso.value < 600) && (altura.value > 20 && altura.value < 300)){
            resultado.innerHTML = `<p class="bg-verde">O seu IMC é ${IMC.toFixed(2)} e você está ${resultadoIMC}</p>`;
        }
        else if((peso.value <= 5 || peso.value >= 600) && (altura.value <= 20 || altura.value >= 300)){
            resultado.innerHTML = `<p class="bg-vermelho">Peso e altura inválidos</p>`;
        }
        else if((peso.value <= 5 || peso.value >= 600) && (altura.value > 20 && altura.value < 300)){
            resultado.innerHTML = `<p class="bg-vermelho">Peso inválido</p>`;
        }
        else if((peso.value > 5 && peso.value < 600) && (altura.value <= 20 || altura.value >= 300)){
            resultado.innerHTML = `<p class="bg-vermelho">Altura inválida</p>`;
        }
        else{
            resultado.innerHTML = `<p class="bg-vermelho">Erro desconhecido</p>`;
        }
    }

    function imc(peso, altura){
        let alturaEmM = altura/100;
        return(peso/(alturaEmM*alturaEmM))
    }

    function avaliaIMC(imc){
        if(imc < 18.5){return('Abaixo do peso')}
        else if(imc >= 18.5 && imc < 25){return('com peso normal')}
        else if(imc >= 25 && imc < 30){return('com sobrepeso')}
        else if(imc >= 30 && imc < 35){return('com obesidade grau 1')}
        else if(imc >= 35 && imc < 40){return('com obesidade grau 2')}
        else if(imc >= 40){return('com obesidade grau 3')}
        else {return('imc inválido')}
    }
    
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();