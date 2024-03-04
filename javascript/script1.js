document.getElementById('get-weather-btn').addEventListener('click', function() {
    const apiKey = 'de7d91cf71a92209fd7cd95d37f0ec47';
    const city = document.getElementById('city-input').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
  
    const outputElement = document.getElementById('weather-output');

    // Funcție pentru conversia temperaturii din Kelvin în Celsius
        function convertKelvinToCelsius(kelvin) {
            return kelvin - 273.15;
        }

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const temperatureKelvin = data.main.temp;
    const temperatureCelsius = convertKelvinToCelsius(temperatureKelvin); // Apelarea funcției de conversie
    const description = data.weather[0].description;
    const location = data.name;
    outputElement.innerHTML = `<p>Temperature in ${location}: ${temperatureCelsius.toFixed(2)}°C</p>
                               <p>Weather: ${description}</p>`;
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

