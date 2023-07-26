

const numContador = document.querySelector('#num-contador');
const btnMais = document.querySelector('#btn-mais');
const btnMenos = document.querySelector('#btn-menos');
const btnMenu = document.querySelector('#btn-menu');

btnMenu.addEventListener('click', function(){
    const menu = document.querySelector('#menu');
    menu.classList.toggle('active');

    // caso o usuário clique em qualquer lugar da tela, o menu será fechado
    window.addEventListener('click', function(e){
        if (e.target != menu && e.target != btnMenu) {
            menu.classList.remove('active');
        }
    } );

} );

let contador = 0;

btnMais.addEventListener('click', function(){
    numContador.innerHTML = contador += 1;
} );

btnMenos.addEventListener('click', function(){
    numContador.innerHTML = contador -= 1;
} );

function interpret() {
    const code = document.getElementById('codeInput').value;
    try {
        const parsedCode = esprima.parseScript(code);
        const result = acorn.interpreter.walk(parsedCode, acorn.interpreter.globalScope);
        document.getElementById('output').textContent = result.value.toString();
    } catch (error) {
        document.getElementById('output').textContent = 'Erro ao executar o código: ' + error.message;
    }
}

const btnCalcular = document.querySelector('#btn-calcular');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');

function validarNumero(num1, num2) {
    if (num1 === num2) {
        return `Os números ${num1} e ${num2} são iguais. Sua soma é ${num1 + num2}, que é maior que 10 e maior que 20`;
    } else {
        return `Os números ${num1} e ${num2} não são iguais. Sua soma é ${num1 + num2}, que é maior que 10 e maior que 20`;
    }
}

btnCalcular.addEventListener('click', () => {
    const resultado = validarNumero(num1.value, num2.value);
    alert(resultado);
});

const btnPalavra = document.querySelector('#btn-palavra');
const palavra = document.querySelector('#palavra');
const resultado = document.querySelector('#resultado');

function verificarPalindromo(palavra) {

    // split - transforma a string em um array
    // reverse - inverte os elementos do array
    // join - junta todos os elementos do array em uma string
    const palavraInvertida = palavra.split('').reverse().join('');

    if (palavra === '') {
        return 'Digite uma palavra';
    } else if (palavra === palavraInvertida) {
        return `A palavra ${palavra} é um palíndromo`;
    } else {
        return `A palavra ${palavra} não é um palíndromo`;
    }
}

btnPalavra.addEventListener('click', () => {
    const resultadoPalavra = verificarPalindromo(palavra.value);
    resultado.innerHTML = resultadoPalavra;
});