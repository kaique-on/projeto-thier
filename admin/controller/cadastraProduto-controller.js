document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form[data-form]");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtenha os valores dos campos
        const nome = document.querySelector("input[data-nome]").value;
        const preco = document.querySelector("input[data-preco]").value;
        const descricao = document.querySelector("textarea[data-descricao]").value;

        // Crie um objeto JavaScript para representar o produto
        const produto = {
            nome: nome,
            preco: preco,
            descricao: descricao,
        };

        // Converta o objeto em uma string JSON
        const produtoJSON = JSON.stringify(produto);

        // Aqui você pode fazer o que quiser com a string JSON, como enviá-la para um servidor, armazená-la em um banco de dados, etc.
        console.log(produtoJSON);
    });
});