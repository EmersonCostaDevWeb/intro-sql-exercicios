class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca,cor,gastoMedio){
        this.marca = marca;
        this.cor = cor,
        this.gastoMedio = gastoMedio
    }

    calcularGasto(distancia,precoCombustivel){
        return distancia * this.gastoMedio*precoCombustivel
    }
}

const Uno = new Carro("Fiat","Prata",1/12)

console.log(Uno.calcularGasto(70,6));
