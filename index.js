//ui

const ui = (weather) => {
    // log(weather)
    let temp = `
    <div class="container">
        <div class="weather-side">
        <div class="weather-gradient"></div>
        <div class="date-container">
            <h2 class="date-dayname">FRIDAY</h2><span class="date-day">25 Aug 2023</span><i class="location-icon" data-feather="map-pin"></i><span class="location">${weather.name}</span>
        </div>
        <div class="weather-container"><i class="weather-icon" data-feather="sun"></i>
          <h1 class="weather-temp">${weather.main.temp}°C</h1>
          <h3 class="weather-desc">Sunny</h3>
        </div>
      </div>
      <div class="info-side">
        <div class="today-info-container">
          <div class="today-info">
            <div class="precipitation"> <span class="title">PRECIPITATION</span><span class="value">0 %</span>
              <div class="clear"></div>
            </div>
            <div class="humidity">
             <span class="title">HUMIDITY</span>
             <span class="value">${weather.main.humidity}%</span>
              <div class="clear"></div>
            </div>
            <div class="wind"> <span class="title">WIND</span><span class="value">${weather.wind.speed} km/h</span>
              <div class="clear"></div>
            </div>
          </div>
        </div>
        <div class="week-container">
          <ul class="week-list">
            <li class="active"><i class="day-icon" data-feather="sun"></i><span class="day-name">Sat</span><span class="day-temp">29°C</span></li>
            <li><i class="day-icon" data-feather="cloud"></i><span class="day-name">Sun</span><span class="day-temp">23°C</span></li>
            <li><i class="day-icon" data-feather="cloud-snow"></i><span class="day-name">Mon</span><span class="day-temp">28°C</span></li>
            <li><i class="day-icon" data-feather="cloud-rain"></i><span class="day-name">Tue</span><span class="day-temp">30°C</span></li>
            <div class="clear"></div>
          </ul>
        </div>
      </div>
    </div>`;
    document.getElementById("weather").innerHTML = temp;
};

// calling api with city name

const getweather = (city) => {
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1a26708ce353c0fd4ceb97aaa7863ce3&units=metric`
    )
        .then((response) => response.json())
        .then((data) => ui(data));
};

// function for getting city name
document.getElementById("btn").addEventListener("click", function (e) {
    let city = document.getElementById("location").value;
    console.log(city);
    getweather(city);

});