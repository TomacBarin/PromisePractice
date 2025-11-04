// Hämta knapp
const btnHtml = document.querySelector("#btn");
const paraHtml = document.querySelector("#displayResult");

function getWeather() {
  paraHtml.textContent = "Laddar väder...";  // Bra UX

  fetch("https://api.open-meteo.com/v1/forecast?latitude=56.05&longitude=12.70&current_weather=true")
    .then(response => {
      if (!response.ok) throw new Error("Nätverksfel: " + response.status);
      return response.json();
    })
    .then(data => {
      const temp = data.current_weather.temperature;
      paraHtml.textContent = `Temperaturen i Helsingborg är ${temp}°C`;
    })
    .catch(error => {
      paraHtml.textContent = "Kunde inte hämta väder.";
      console.error("Fel:", error);
    });
}