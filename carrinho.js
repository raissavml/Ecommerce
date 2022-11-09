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
//proposta de solução futura para alterar quantidade de produtos, ainda ineficaz //
/*     function alteraQuantidade(somar, sku){        
        let index = this.item.findIndex(item => item.sku == sku)
        let this.quantidade = Number(elementoQuantidade.innerHTML)
        if (somar){
            this.quantidade ++
        }
        else {
         if ( quantidade <= 0) {
             return
            }
            quantidade --
      }
        elementoQuantidade.innerHTML = this.quantidade
    } */
}
//alterar quantidade de produtos atual, de forma ineficiente, porém funcional //
 function alteraQuantidade(somar, id){        
    const elementoQuantidade = document.getElementById(id)
    let quantidade = Number(elementoQuantidade.innerHTML)
    if (somar){
        quantidade ++
    }
    else {
        if ( quantidade <= 0) {
            return
        }
        quantidade --
    }
    elementoQuantidade.innerHTML = quantidade
}
//estrutura para deletar códigos do html
/* function click(){                     
    document.getELementById('avo').remove();                    
     document.getElementById('avo').remove(); 
} */

/* Criar carrinho */
let meuCarrinho = new Carrinho();

/* criar ítens provisórios para teste*/
let Item1 = new Item("Blusinha", [], [pp,p,m,g,gg], [], 0, 50.00);

/* Atualizar preço da entrega sem busca de cep inicialmente */
meuCarrinho.atualizarEntrega(10);
meuCarrinho.atualizarImposto(5);

/* Adicionar ítens */
meuCarrinho.adicionarCarrinho(Item1);
/* meuCarrinho.adicionarCarrinho(Item2);
meuCarrinho.adicionarCarrinho(Item3); */

/* meuCarrinho.removerCarrinho(meuCarrinho.itens[1].sku) */
console.log(meuCarrinho)
console.log(retornaTotal(meuCarrinho))