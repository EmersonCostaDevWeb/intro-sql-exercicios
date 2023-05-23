class Pessoa{
    nome;
    idade;
    anonascimento;
    constructor(nome, idade){
        this.nome = nome,
        this.idade =idade,
        this.anonascimento = 2022- idade
    }
    descrever(){
        console.log(`menu nome é ${this.nome} e minha idade é ${this.idade} ${this.anonascimento}`);
    }
}
function comparar(p1,p2){
    if(p1.idade> p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    }else if(p2.idade> p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    }else{
        console.log(`${p2.nome} e ${p1.nome} tem a mesma idade`);
    }
}

const vitor = new Pessoa("vitor", 22);
const Rena = new Pessoa("Renan", 18);
 
comparar(vitor, Rena)

vitor.descrever()
Rena.descrever()

// const juca = new Pessoa()
// juca.nome = "Juca",
// juca.idade =19





const renan = {
    name :"Renan",
    idade:30,
    descrever:function(){
        console.log(`menu nome${this.name} e minha idade é ${this.name}`);
    }
}
