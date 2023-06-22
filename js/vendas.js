let titulo = localStorage.getItem("nome_veiculo");

        document.getElementById("vendas-h1").innerHTML = titulo;

        let id_veiculo = localStorage.getItem("id_veiculo")

        let conce = ""

        fetch("php/clientes.php")
        .then(function(response) {
            return response.json()
        })
        .then(function(data){
            console.log(data)

            let codHtml = '<Label class="vendas-espaco">Cliente:</Label>'+
            '<select>'+
            '<option disabled selected></option>'

            for(let i = 0; i < data.length; i++){
                codHtml += `<option>${data[i].nome}</option>`
            }
            codHtml += '</select><br><br>'

            document.getElementById("vendas-clientes").innerHTML = codHtml
        })
        .catch(function(error){
            console.log(error);
        })

        fetch("php/alocacao.php")
        .then(function(response){
            return response.json()
        })
        .then(function(data){ 
            
            console.log(id_veiculo)

            for(let i=0; i<data.length; i++){
                if(data[i].automovel == id_veiculo){
                    conce = data[i].concessionaria
                }
            }
        })
        .catch(function(error){
            console.log(error);
        })

        fetch("php/concessionarias.php")
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)

            let codHtml = '<Label>Concessionaria:</Label>'+
            '<select name="id">'+
            '<option value="" disabled selected></option>'

            for(let i = 0; i < data.length; i++){
                if(data[i].id == conce){
                    console.log(data[i].id)
                    codHtml += `<option value="${id_veiculo}">${data[i].concessionaria}</option>`
                }
            }
            codHtml += '</select><br><br>'

            document.getElementById("vendas-conce").innerHTML = codHtml
        })
        .catch(function(error){
            console.log(error);
        }) 