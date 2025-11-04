// Hämta knapp
const btnHtml = document.querySelector("#btn");
const paraHtml = document.querySelector("#displayResult");

function fetchWeather() {
  fetch("https://api.open-meteo.com/v1/forecast?latitude=56.05&longitude=12.70&current_weather=true")
    .then(response => response.json())
    .then(data => {
      const temperature = data.current_weather.temperature;
      paraHtml.textContent = `Temperaturen i Helsingborg är ${temperature}°C`;
    })
    .catch(error => {
        paraHtml.textContent = "Kunde inte hämta data.";
        console.error("Fel vid hämnting av väder", error);
    })
}

btnHtml.addEventListener("click", () => {
    fetchWeather()
    
});