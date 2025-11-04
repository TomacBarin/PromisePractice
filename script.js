// Hämta knapp
const btnHtml = document.querySelector("#btn");
const paraHtml = document.querySelector("#displayResult");

function getWeather() {
    paraHtml.textContent = "Sidan laddar..."

}

btnHtml.addEventListener("click", () => {
    paraHtml.textContent = getWeather()
    fetch("https://api.open-meteo.com/v1/forecast?latitude=56.05&longitude=12.70&current_weather=true")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const temp = data.current_weather.temperature;
        paraHtml.textContent = `Temperaturen är ${temp} grader, vaeee...`
    })
    .catch(error => {
        paraHtml.textContent = "Kunde inte hämta data, vaeee....";
        console.error("Fel, haom!", error);
    })
    
})