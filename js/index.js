let dados;
fetch("php/alocacao.php")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // Manipula os dados recebidos do PHP
        console.log(data);

        // array das areas disponiveis sem as outras colunas
        let areas = data.map(({ area }) => parseInt(area))

        // Variavel responsavel por armazenar o codigo html
        let codHtml = ""

        // Estrutura para a verificação de area de 1 a 6
        for (let i = 1; i <= 6; i++) {
            
            // Condição para verificar se o numero existe dentro do array
            if (areas.includes(i)) {
                codHtml += `<div class="area${i} border" onclick="area(${i})" style="background-color: blue; color: white;">${i}</div>`
            } else {
                codHtml += `<div class="area${i} border" onclick="aviso()" style="background-color: white">${i}</div>`
            }
        }

        // Local que é responsavel por substituir no html
        document.getElementById("principal").innerHTML = codHtml
        dados = data
    })
    .catch(function (error) {
        alert(error);
    });

function aviso() {
    alert("Area indisponivel para compra");
}

function area(local) {
    window.location.href = "autos.html";
    localStorage.setItem("titulo", "Area " + local);
    localStorage.setItem("area", local);
}