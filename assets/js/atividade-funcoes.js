let alunos =[{
    nome: 'João',
    nota: 4
},
{
    nome: 'Maria',
    nota: 10
},{
    nome: 'José',
    nota: 8
},{
    nome: 'Pedro',
    nota: 7
}];

function alunosAprovados (alunos, media_final){
    let aprovados = [];

    for(let i = 0; i < alunos.length; i++){
        const {nota, nome} = alunos[i];

        if(nota >= media_final){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));
console.log("Aqui")

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

function calculaIdade(anos) {
    console.log(`${this.nome} daqui a ${anos} anos, terá ${this.idade + anos} anos de idade.`);
}

const gerente = {
    nome: "Maria",
    idade: 35,
};

const motorista = {
    nome: "João",
    idade: 19,
};

calculaIdade.call(gerente, 3); // Daqui a 3 anos, Maria terá 38 anos de idade.

calculaIdade.apply(motorista, [3]); // Daqui a 3 anos, João terá 22 anos de idade.
