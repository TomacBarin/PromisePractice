// Hämta knapp
const btnHtml = document.querySelector("#btn");
const paraHtml = document.querySelector("#displayResult");

function collectW() {
    paraHtml.textContent = "Laddar sidan..."
    fetch("https://api.open-meteo.com/v1/forecast?latitude=56.05&longitude=12.70&current_weather=true")
    .then(respons => respons.json())
    .then(data => {
        console.log(data)
        const temp = data.current_weather.temperature;
        paraHtml.textContent = `Temperaturen är ${temp} grader!`
    })
    .catch(error => {
        console.log("Något gick snett.")
        paraHtml.textContent = "Något gick knas!"
    })
}

btnHtml.addEventListener("click", () => {
    console.log("Klickat!");
    collectW()
})

