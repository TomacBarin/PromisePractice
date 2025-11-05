// Hämta knapp
const btnHtml = document.querySelector("#btn");
const paraHtml = document.querySelector("#displayResult");

// Funktion
function catchWeath() {
    paraHtml.textContent = "Laddar..."

    // Hämta information
    fetch("https://api.open-meteo.com/v1/forecast?latitude=56.05&longitude=12.70&current_weather=true")

    // Gör informationen JS-vänlig
    .then(response => {
        if (!response.ok) {
            throw new Error("Systemfel.")
        } return response.json()
    })

    // Visa informationen på sidan
    .then(data => {
        console.log(data)
        const temp = data.current_weather.temperature
        paraHtml.textContent = `Temperaturen är nu ${temp} grader.`
    })
    .catch(error => {
        paraHtml.textContent = "Något gick fel. Försök senare."
        console.error("Något gick snett", error)
    })

}

// Event-listener
btnHtml.addEventListener("click", () => {
    // console.log("Knappen har klickats på!")
    catchWeath()
})