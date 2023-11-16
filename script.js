

const chave = "c57844ed9ac72e73d80c3ff871e73225"


function colocarDadosNaTela (dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) +"°C"
    document.querySelector(".previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML =  dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade){
    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`).then( resposta => resposta.json())

    colocarDadosNaTela(dados)
   
}


function CliqueiNoBotao(){
    const cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}
