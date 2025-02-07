async function getWeather() {
    const city = document.getElementById('city').value || "Lagos";
    const apiKey = '58d7b67725cced4a4ba50324188e4157'; // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            document.getElementById('weather').innerText = 
                `🌡️ Temperature in ${city}: ${data.main.temp}°C
                🌤️ Weather: ${data.weather[0].description}
                💨 Wind Speed: ${data.wind.speed} m/s
                💧 Humidity: ${data.main.humidity}%`;
        } else {
            document.getElementById('weather').innerText = '⚠️ City not found! Please try again.';
        }
    } catch (error) {
        document.getElementById('weather').innerText = '❌ Error fetching weather data. Check your connection!';
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const mode = document.body.classList.contains("dark-mode") ? "Dark" : "Light";
    alert(`🌙 Switched to ${mode} Mode!`);
}
