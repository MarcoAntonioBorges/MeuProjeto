myStorage = window.localStorage;
var produto = JSON.parse(myStorage.getItem("produto"));
const ENDPOINT_URL = "http://127.0.0.1:3000/produtos";
const API_HEADERS = {
    "Content-Type": "application/json"
};

if(produto != null) {
    myStorage.removeItem("produto");

    var form = document.getElementById("form");
    var btnSubmit = document.getElementById("btnSubmit");
    
    form.nome.value = produto.nm_produto;
    form.preco.value = produto.vl_produto;
    form.dataFabr.value = produto.dt_fabricacao;
    form.descricao.value = produto.ds_produto;

    btnSubmit.addEventListener('click', function(evt) {
        evt.preventDefault();

        var produtoAlterado = {
            nm_produto: form.nome.value,
            vl_produto: form.preco.value,
            ds_produto: form.descricao.value,
            dt_fabricacao: form.dataFabr.value
        };

        axios.put(ENDPOINT_URL + "/" + produto.cd_produto, produtoAlterado , API_HEADERS)
            .then(function(response) {
                Swal.fire({
                    title: "Produto atualizado",
                    text: "Produto atualizado com sucesso!",
                    icon: "success"
                }).then(function(confirm) {
                    if(confirm.isConfirmed) {
                        window.location.href = window.location.href.replace("formEdit.html", "consulta.html");
                    }
                });
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    title: "Erro ao tentar atualizar o produto",
                    text: "Verifique os dados inseridos",
                    icon: "error"
                });
            });      
    });

}
