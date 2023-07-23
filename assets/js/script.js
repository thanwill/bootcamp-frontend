/*
CONSOLE 
Inspencionar no navegador
console.log('Hello World');
*/

// Criando um contador



const numContador = document.querySelector('#num-contador');
const btnMais = document.querySelector('#btn-mais');
const btnMenos = document.querySelector('#btn-menos');
let contador = 0;

btnMais.addEventListener('click', function(){
    numContador.innerHTML = contador += 1;
} );

btnMenos.addEventListener('click', function(){
    numContador.innerHTML = contador -= 1;
} );
