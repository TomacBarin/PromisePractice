// Version UTAN try/catch
const btnHtml = document.querySelector("#btn");
const paraHtml = document.querySelector("#displayResult");

async function collectW() {
    paraHtml.textContent = "Laddar väder...";

    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=56.05&longitude=12.70&current_weather=true");
    const data = await response.json();

    const temp = data.current_weather.temperature;
    paraHtml.textContent = `Temperaturen är ${temp}°C`;
}

btnHtml.addEventListener("click", () => {
    collectW();
});



// Version med try/catch
const btnHtml = document.querySelector("#btn");
const paraHtml = document.querySelector("#displayResult");

async function collectW() {
    paraHtml.textContent = "Laddar väder...";

    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=56.05&longitude=12.70&current_weather=true");
        const data = await response.json();

        const temp = data.current_weather.temperature;
        paraHtml.textContent = `Temperaturen är ${temp}°C`;

    } catch (error) {
        paraHtml.textContent = "Kunde inte hämta väder.";
        console.error("API-fel:", error);
    }
}

btnHtml.addEventListener("click", () => {
    collectW();  // Enkel anrop – ingen kedja!
});