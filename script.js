<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bisola Kayode's Weather App</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin: 50px; background-color: #f4f4f4; }
        input, button { padding: 10px; margin: 10px; }
        .dark-mode { background-color: #333; color: white; }
    </style>
</head>
<body>
    <h1>Bisola Kayode's Weather App ☀️</h1>
    <p>Welcome! Check the weather in any city 🌍</p>
    <input type="text" id="city" placeholder="Enter city name" />
    <button onclick="getWeather()">Get Weather</button>
    <button onclick="toggleDarkMode()">Toggle Dark Mode</button>
    <h2 id="weather"></h2>

    <script src="script.js"></script>

    <footer>
        <p>Created by <strong>Bisola Kayode</strong> | <a href="https://github.com/BissyKay" target="_blank">GitHub</a></p>
    </footer>
</body>
</html>
