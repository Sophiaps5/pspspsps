// a) Crie uma classe chamada Carro
class Carro {
  // b) No constructor(), inicialize as propriedades: marca, modelo, ano e preco
  constructor(marca, modelo, ano, preco) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.preco = preco;
  }

  // c) Crie o método exibirInformacoes() para mostrar os dados do veículo
  exibirInformacoes() {
    console.log(`Marca: ${this.marca} | Modelo: ${this.modelo} | Ano: ${this.ano} | Preço: R$ ${this.preco.toFixed(2)}`);
  }

  // d) Crie o método aplicarDesconto(percentual) para reduzir o preço
  aplicarDesconto(percentual) {
    const desconto = this.preco * (percentual / 100);
    this.preco -= desconto;
  }
}

// e) Crie dois objetos da classe Carro, com dados diferentes (conforme a tabela)
const carro1 = new Carro("toyota", "corolla", 2022, 80000);
const carro2 = new Carro("honda", "city", 2024, 70000);

// f) Exiba as informações dos dois veículos e aplique desconto de 10% em apenas um deles
console.log("--- Dados Iniciais ---");
carro1.exibirInformacoes();
carro2.exibirInformacoes();

// Aplicando 10% de desconto no Toyota Corolla
carro1.aplicarDesconto(10);

console.log("\n--- Após Desconto ---");
carro1.exibirInformacoes();