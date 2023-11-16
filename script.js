const input = document.querySelector("input");
const button = document.querySelector("button")
const img = document.querySelector("img")

const cidade = document.querySelector("#cidade")
const grau = document.querySelector("#grau")

const content = document.querySelector(".content")

button.addEventListener("click", () => {
    if (!input.value) return;
    getWeatherDate();
} );

function gettingJSON(){
    document.write("jquery loaded");
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=c57844ed9ac72e73d80c3ff871e73225",function(json){
        document.write(JSON.stringify(json));
    });
}
 try{
    await fetch(getJSON)
    .then((res)=> res.JSON())
    .then((data)=>{
        if(data?.cod && data.cod === 404){
            return alert("cidade não encontrada.");
        }
        loadWeatherInfo(data);
    })
 } catch (error) {
    alert(error);
 }

 function loadWeatherInfo(data){
    cidade.innerHTML = `S{data.name}, S{data.sys.country}`;
    grau.innerHTML = `temperatura: S{Math.floor(data.main,temp)}°c`;
    img.src = `http://openweathermap.org/img/wn/S{data.weather[0].icon}@2x.pnj`;
    content.style.display = "flex"
 }

