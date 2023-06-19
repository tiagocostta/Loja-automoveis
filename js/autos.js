let area1 = ["Fiat Strada | R$ 43.115,00", "Fiat Argo | R$ 47.660,00", "Fiat Mobi | R$ 32.102,00"]
let area3 = ["Jeep Compass | R$ 34.950,00", "Hyundai HB20 | R$ 49.302,00", "Jeep Renegade | R$ 36.661,00"]
let area4 = ["Volkswagen T-Cross | R$ 38.182,00", "Fiat Toro | R$ 57.733,00", "Hyundai Creta | R$ 55.998,00"]

let titulo = localStorage.getItem("titulo");

let cod = "";

document.getElementById("titulo").innerHTML = titulo;

if(titulo == "Area 1"){

    for(let i = 0; i < area1.length; i++){
        cod += '<label class="autos-modelo">'+ area1[i] +'</label>'+
        '<button class="autos-btn" onclick="dir1('+ i +')">Vender</button>'+
        '<br><br>'
    }

    document.getElementById("autos-label").innerHTML = cod

}else if(titulo == "Area 3"){
    
    for(let i = 0; i < area1.length; i++){
        cod += '<label class="autos-modelo">'+ area3[i] +'</label>'+
        '<button class="autos-btn" onclick="dir2(' + i +')">Vender</button>'+
        '<br><br>'
    }

    document.getElementById("autos-label").innerHTML = cod
}else{

    for(let i = 0; i < area1.length; i++){
        cod += '<label class="autos-modelo">'+ area4[i] +'</label>'+
        '<button class="autos-btn" onclick="dir3(' + i +')">Vender</button>'+
        '<br><br>'
    }

    document.getElementById("autos-label").innerHTML = cod
}


function dir1(num){

    switch(num){
        case 0:
            localStorage.setItem("veiculo", "Fiat Strada")
            window.location.href = "vendas.html"
            break
        case 1:
            localStorage.setItem("veiculo", "Fiat Argo")
            window.location.href = "vendas.html"
            break
        case 2:
            localStorage.setItem("veiculo", "Fiat Mobi")
            window.location.href = "vendas.html"
            break
    }
    
}
function dir2(num){

    switch(num){
        case 0:
            localStorage.setItem("veiculo", "Jeep Compass")
            window.location.href = "vendas.html"
            break
        case 1:
            localStorage.setItem("veiculo", "Hyundai HB20")
            window.location.href = "vendas.html"
            break
        case 2:
            localStorage.setItem("veiculo", "Jeep Renegade")
            window.location.href = "vendas.html"
            break
    }
    
}
function dir3(num){

    switch(num){
        case 0:
            localStorage.setItem("veiculo", "Volkswagen T-Cross")
            window.location.href = "vendas.html"
            break
        case 1:
            localStorage.setItem("veiculo", "Fiat Toro")
            window.location.href = "vendas.html"
            break
        case 2:
            localStorage.setItem("veiculo", "Hyundai Creta")
            window.location.href = "vendas.html"
            break
    }
    
}