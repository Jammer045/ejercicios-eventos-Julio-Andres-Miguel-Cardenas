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

// ejercicio 3

let notas = [];

let guardarNotas = document.getElementById("botonGuardar")
guardarNotas.addEventListener("click", guardarNota)

function guardarNota() {
    let titulo = document.getElementById('tituloNota').value;
    let contenido = document.getElementById('contenidoNota').value;

    if (titulo !== '' && contenido !== '') {
        let nuevaNota = {
            titulo,
            contenido
        };
        notas.push(nuevaNota);
        actualizarLista();
        limpiarCampos();
    } else {
        alert('Por favor, ingresa un título y un contenido para la nota.');
    }
}



function eliminarNota(index) {
    notas.splice(index, 1);
    actualizarLista();
}

let corregir = document.getElementById("botonEliminar")
corregir.addEventListener("click", eliminarNota)

function actualizarLista() {
    let lista = document.getElementById('listaNotas');
    lista.innerHTML = '';

    notas.forEach((nota, index) => {
        let li = document.createElement('li');
        li.textContent = `${nota.titulo}: ${nota.contenido}`;
        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => eliminarNota(index);
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

function limpiarCampos() {
    document.getElementById('tituloNota').value = '';
    document.getElementById('contenidoNota').value = '';
}