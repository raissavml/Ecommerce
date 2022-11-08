// Função que controla o carrinho //
class Carrinho {
    constructor(itens = [], subtotal = 0, frete = 0, logradouro = "", numero = "", complemento = "", cidade = "", estado = "", total = 0, imposto = 0, desconto = 0)
    {this.itens = itens
        this.subtotal = subtotal
        this.logradouro = logradouro
        this.numero = numero
        this.complemento = complemento
        this.cidade = cidade
        this.estado = estado
        this.frete = frete
        this.total = total
        this.imposto = imposto
        this.desconto = desconto
    }

    adicionarCarrinho(item){
        this.itens.push(item)
        this.atualizarCarrinho()
    }

    removerCarrinho(sku){
        let index = this.itens.findIndex(item => item.sku == sku)

        if(index == "-1"){
            console.log("Não foi encontrado");
        }
        else{
            this.itens.splice(index, 1)
            console.log("Valor removido")
        }
    }

    atualizarFrete(frete){
        this.frete = frete
    }

    atualizarImposto(imposto){
        this.imposto = imposto
    }

    retornaTotal(){
        return this
    }
    atualizarCarrinho(){
        this.subtotal = 0
        this.total = 0

        this.itens.map((item)=>{
            this.subtotal += item.preco * item.quantidade;
            this.total += item.subtotal + item.frete - item.desconto
        });
        console.log(this.subtotal);
    }
}

class Item{
    constructor(nome = "", imagens = [], tamanho = [], cores = [], quantidade = 0, preco = 0){
        this.sku = Math.random().toString().substring(2)
        this.nome = nome
        this.imagens = imagens
        this.tamanho = tamanho
        this.cores = cores
        this.quantidade = quantidade
        this.preco = preco
    }

}

    function alteraQuantidade(somar, id){        
        const elementoQuantidade = document.getElementById(id)
        let quantidade = Number(elementoQuantidade.innerHTML)
        if (somar){
            quantidade ++
        }
        else {
           quantidade --
        }
        elementoQuantidade.innerHTML = quantidade
    }

/* Criar carrinho */
let meuCarrinho = new Carrinho();

/* criar ítens provisórios para teste*/
let Item1 = new Item("Blusinha", [], [pp,p,m,g,gg], [], 0, 50.00);
/* let Item2 = new Item("Mascara", 1, 10);
let Item3 = new Item("Base", 1, 25);
 */
/* Atualizar preço da entrega sem busca de cep inicialmente */
meuCarrinho.atualizarEntrega(10);
meuCarrinho.atualizarImposto(5);

/* Adicionar ítens */
meuCarrinho.adicionarCarrinho(Item1);
meuCarrinho.adicionarCarrinho(Item2);
meuCarrinho.adicionarCarrinho(Item3);

meuCarrinho.removerCarrinho(meuCarrinho.itens[1].sku)
console.log(meuCarrinho)
console.log(retornaTotal(meuCarrinho))