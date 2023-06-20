let titulo = localStorage.getItem("titulo")
document.getElementById("titulo").innerHTML = titulo
let num_veiculos = []
let nomes_veiculos = []
let veiculos = []
let area = localStorage.getItem("area")

fetch("php/alocacao.php")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].area == area) {
                num_veiculos.push(parseInt(data[i].automovel))
            }
        }
    })

fetch("php/automoveis.php")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let codHtml = "";
        console.log(num_veiculos)

        for (let i = 0; i < num_veiculos.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (num_veiculos[i] == data[j].id) {
                    console.log(`${num_veiculos[i]} -- ${data[j].id}`)
                    veiculos.push(`${data[j].modelo} | ${data[j].preco}`)
                    nomes_veiculos.push(data[j].modelo)
                }
            }
        }
        console.log(veiculos)

        for (let i = 0; i < veiculos.length; i++) {
            codHtml += `<label class="auto-modelo">${veiculos[i]}</label>` +
                `<button class="autos-btn" onclick="direcionamento('${nomes_veiculos[i]}')">Vender</button>` +
                "<br><br>"
        }

        document.getElementById("autos-label").innerHTML = codHtml
    })

function direcionamento(veiculo) {
    window.location.href = "vendas.html"
    localStorage.setItem("nome_veiculo", veiculo)
}