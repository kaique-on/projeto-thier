const listaProdutos = () => {
    return fetch(`http://localhost:3000/produtos`)
    .then(resposta => {
       return resposta.json()
    })   
 }
 
 const criarProdutos = (nome, preco, descricao) => {
    return fetch(`http://localhost:3000/produtos`, {
       method: 'POST', 
       headers: {
          'Content-type' : 'application/json' 
       },
       body: JSON.stringify({
          nome: nome,
          preco: preco,
          descricao: descricao
       })
    })
    .then(resposta => {
       return resposta.json();
    })
 }

 const removeProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
       method: 'DELETE'
    })
 }
 
 const detalhaProduto = (id) => {
    return fetch(`http://localhost:3000/produtos${id}`)
    .then(resposta => {
       return resposta.json()
    })
 }

const atualizaProduto = (id, preco, descricao, nome) => {
   return fetch (`http://localhost:3000/produtos/${id}`, {
      method 'PUT',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify({
         nome: none
      })
   })
}

export const produtoService = {
    criarProdutos,
    listaProdutos,
    removeProduto,
    detalhaProduto
  }