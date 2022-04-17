// function carregamentoPagina() {
//     alert("mensagem apresentada no carregamento do sistema");
// }

function populaTabela() {
    if (localStorage.getItem("produtos")) {
        let produtos = JSON.parse(localStorage.getItem("produtos"))

        $("#tblProdutos tbody").html("")
        produtos.forEach((produto) => {
            $("#tblProdutos tbody").append(`<tr>
                <td>${produto.nome}</td>
                <td>${produto.quantidade}</td>
                <td>${produto.valor}</td>
                <td style="width: 50px"><button type="button" class="btn btn-info">E</button></td>
                <td style="width: 50px"><button type="button" class="btn btn-danger">D</button></td>
            </tr>`)
        })
    }
}

$(() => {
    //     //Codigo executado no carregamento do sistema
    populaTabela()

    $("#btnSalvar").click(() => {
        let produto = {}
        produto.nome = $("#nmProduto").val()
        produto.quantidade = $("#quantidade").val()
        produto.valor = $("#vlrProduto").val()

        let listaProdutos = []

    if (localStorage.getItem("produtos")) {
        listaProdutos = JSON.parse(localStorage.getItem("produtos"))
    }

    listaProdutos.push(produto)

    localStorage.setItem("produtos", JSON.stringify(listaProdutos))

    alert("Produto salvo com sucesso!")

    $("#nmProduto").val("")
    $("#quantidade").val("")
    $("#vlrProduto").val("")

    populaTabela()
})
})