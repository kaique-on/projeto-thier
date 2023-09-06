import { clienteService } from "../service/clientes-service"

const pegaURL = new URL(window.location)
//console.log(pegaURL)

const id = pegaURL.searchParams.get('id')

console.log(id)

const inputNome = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

clienteService.detalhaCliente(id)
.then(dados => {
    inputNome.value = dados.inputNome
    inputEmail.value = dados.inputEmail
})

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault()

    clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
    .then(() => {
        window.location.href = "../telas/edicao_concluida.html"
    })
})