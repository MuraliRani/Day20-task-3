// Fetch weather data from OpenWeatherMap API
function fetchWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY')
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById('weather');
            const weatherInfo = `Weather: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`;
            weatherDiv.innerHTML = weatherInfo;
        })
        .catch(error => console.error('Error fetching weather:', error));
}

// Fetch a random Chuck Norris joke
function fetchJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            const jokeDiv = document.getElementById('joke');
            jokeDiv.innerHTML = `<blockquote class="blockquote">${data.value}</blockquote>`;
        })
        .catch(error => console.error('Error fetching joke:', error));
}

// Fetch a random dog image
function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const dogImageDiv = document.getElementById('dog-image');
            dogImageDiv.innerHTML = `<img src="${data.message}" class="img-fluid" alt="Random Dog">`;
        })
        .catch(error => console.error('Error fetching dog image:', error));
}

// Function to refresh data
function refreshData() {
    fetchWeather();
    fetchJoke();
    fetchDogImage();
}

// Call the refreshData function when the page loads
window.onload = refreshData;

// Add click event listener to the refresh button
document.getElementById('refresh-btn').addEventListener('click', refreshData);
