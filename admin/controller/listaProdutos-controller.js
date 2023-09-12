import {produtoService} from "../service/produtos-service.js"

const criaNovaLinhaProduto = (nome, preco, descricao) => {
   const linhaNovoProduto = document.createElement('tr')
   const conteudo = `
      <td class="td" data-td>${nome}</td>
      <td>${preco}</td>
      <td>${descricao}</td>
      <td>
         <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
         </ul>
      </td>`    
   linhaNovoProduto.innerHTML = conteudo
   console.log(linhaNovoProduto)
   
   
   return linhaNovoProduto
}

const tabelaProduto = document.querySelector('[data-tabela-produto]')

tabelaProduto.addEventListener('click', (evento) => {
   let botaoDeletar = evento.target.className == 'botao-simples botao-simples--excluir'
   if(botaoDeletar) {
      const linhaNovoProduto = evento.target.closest('[data-id]')
      let id = linhaNovoProduto.dataset.id
      produtoService.removeCliente(id)
      .then(() => {
         linhaNovoProduto.remove()
      })
   }
})

produtoService.listaProdutos()
.then(data => {
   data.forEach(element => {
      tabelaProduto.appendChild(criaNovaLinhaProduto(element.nome, element.preco, element.descricao))
   })
})