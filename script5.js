// Hämta knapp
const btnHtml = document.querySelector("#btn");
const paraHtml = document.querySelector("#displayResult");

function displayWeather() {
    paraHtml.textContent = "Sidan laddas";
    
    fetch("https://api.open-meteo.com/v1/forecast?latitude=56.05&longitude=12.70&current_weather=true")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const temp = data.current_weather.temperature;
        paraHtml.textContent = `Vädret är ${temp} grader.`
    })
    .catch(error => {
        console.error("Något gick knas", error)
        paraHtml.textContent = "Något gick snett."
    })
}

btnHtml.addEventListener("click", () => {
    paraHtml.textContent = displayWeather()
})