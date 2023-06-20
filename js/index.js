fetch("php/alocacao.php")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // Manipula os dados recebidos do PHP
        console.log(data);
        areas = data.map(({ area }) => parseInt(area))
        console.log()
        // console.log(areas.includes(4))
        // Aqui você pode fazer qualquer manipulação necessária nos dados
        let codHtml = ""
        for (let i = 1; i <= 6; i++) {
            if (areas.includes(i)) {
                codHtml += `<div class="area${i} border" onclick="area(${i})" style="background-color: blue; color: white;">${i}</div>`

            } else {
                codHtml += `<div class="area${i} border" onclick="aviso()" style="background-color: white">${i}</div>`
            }
        }
        document.getElementById("principal").innerHTML = codHtml
    })
    .catch(function (error) {
        alert("aaaaaaa");
    });

function aviso() {
    alert("Area indisponivel para compra");
}

function area(local) {
    window.location.href = "autos.html";
    localStorage.setItem("titulo", "Area " + local);
}