let caja = document.getElementById("botton")
caja.addEventListener("click", calcularIMC)

function calcularIMC() {
    let peso = parseInt(document.getElementById('peso').value);
    let estatura = parseInt(document.getElementById('estatura').value);
    if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
      alert('Por favor, ingresa valores numéricos válidos para peso y altura.');
      return;
    }
  
    let imc = peso / ((estatura/100) * (estatura/100));
    let imcRedondeado = imc.toFixed(2);
    let inputResultado= document.getElementById('miInput')
    inputResultado.value= imcRedondeado
    if (imc < 18.5) {
      document.getElementById('clasificacion').textContent = 'Bajo peso';
    } else if (imc < 25) {
      document.getElementById('clasificacion').textContent = 'Peso normal';
    } else if (imc < 30) {
      document.getElementById('clasificacion').textContent = 'Sobrepeso';
    } else {
      document.getElementById('clasificacion').textContent = 'Obesidad';
    }console.log(imcRedondeado);
  }

let dolar = 1;
let peso = 18.64;
let inputDolar = document.getElementById('dolares');
let inputPeso = document.getElementById('pesos');

function actualizarValoresp() {
    dolar = parseFloat(inputDolar.value);
    peso = parseFloat(inputPeso.value);

    inputPeso.value = 1*peso;
    inputDolar.value = 0.054*peso;
    
}

function actualizarValores() {
  dolar = parseFloat(inputDolar.value);
  peso = parseFloat(inputPeso.value);

  inputPeso.value = dolar*peso;
  inputDolar.value = peso/peso;
  
}

actualizarValores();

inputDolar.addEventListener('input', actualizarValores);
inputPeso.addEventListener('input', actualizarValoresp);

