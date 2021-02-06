
/* Outstanding Items:

1. HOW CAN I ADD LOCAL STORAGE OF PREVIOUS SEARCHES [X]
2. HOW CAN I REDUCE WHAT I HAVE TO A LOOP
3. HOW CAN I DISPLAY THE ICON, AS AN ICON
4. HOW CAN I LINE UP THE BOXES NEXT TO ONE ANOTHER
5. HOW CAN I WORK WITH DATES
6. HOW CAN I CLEAR THE WINDOW WHEN A NEW SEARCH APPEARS [x]
*/



var getCity = null;

document.querySelector('#search').addEventListener('click', function () {
    getCity = document.querySelector('#cityName').value;
    getWeatherSearch(getCity);
})

function saveSearch() {
            
    // make sure value wasn't empty
    if (getCity !== "") {
    // get cities searched previously from localstorage, or if not any, set to empty array
    var newCity = JSON.parse(window.localStorage.getItem("citiesSearched")) || [];
    
    if (newCity.indexOf(getCity) <0) {
        newCity.push(getCity);
        window.localStorage.setItem("citiesSearched", JSON.stringify(newCity));
    }
    
    $("#citiesSearched").empty();    // used JQuery
    for (let index = 0; index < newCity.length; index++) {
        const city = newCity[index];
        console.log(city)
    
    var cityElement = document.createElement ("div");

        cityElement.innerHTML= city ;
        document.querySelector("#citiesSearched").appendChild(cityElement)

    }

    }
}

async function getWeatherSearch(question) {
    // get the current weather from openweathermap
    var fetchUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + question + "&APPID=6547225cae7c6979fe92842a6b897980&units=metric"

    console.log(`.. fetching from ${fetchUrl}`)

    getWeather = await fetch(fetchUrl).then(r => r.json())

    console.log(`. fetched weather data: `, getWeather)

    console.log(`.. showing weather data!`)

    var title = getWeather.name;
    var temp = getWeather.main.temp;
    var feel = getWeather.main.feels_like;
    var desc = getWeather.weather[0].description;
    var humidity = getWeather.main.humidity;
    var wind = getWeather.wind.speed;
    var icon = getWeather.weather[0].icon;

    console.log(`url: ${temp}`)

    $("#currentWeather").empty();    // used JQuery
    document.querySelector('#currentWeather').innerHTML += `
    <div id="CurrentTitle" class="card2-title style="width: 30rem><h1>Current Weather</h1></div>
    <div class="card" style="width: 30rem;">
        
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <img src="http://openweathermap.org/img/wn/${icon}@2x.png">
            <h6 class="card-text">The weather is  ${desc}.</h6>
            <h6 class="card-text">The current temperature is  ${temp} degrees celsius, but it feels like ${feel} degrees celsius.</h6>
            <h6 class="card-text">The humidity is  ${humidity}%.</h6>
            <h6 class="card-text">The wind speed is  ${wind} KPH.</h6>
        </div>
    </div>
    `
    saveSearch()

    getFutureWeatherSearch(question);
}

async function getFutureWeatherSearch(question) {

    // get the forecast weather from openweathermap
    var fetchUrl2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + question + "&APPID=6547225cae7c6979fe92842a6b897980&units=metric"

    getForecast = await fetch(fetchUrl2).then(r => r.json())

    $("#FiveDayTitle").empty();    // used JQuery
    document.querySelector('#FiveDayTitle').innerHTML += `
        <div class="FiveDayTitle style="width: 30rem><h2>Five-Day Forecast:</h2></div>
        `

    // Loop over all forecasts in 3 hour increments starting at [0]
    // for (let i = 0; i < 5; i++) {
    //     console.log(i)
    //     if (getForecast.list[i].dt_txt.indexOf("15:00:00") !== -1){

    var max = getForecast.list[0].main.temp_max;
    var min = getForecast.list[0].main.temp_min;
    var humidity = getForecast.list[0].main.humidity;
    var wind = getForecast.list[0].wind.speed;
    var icon = getForecast.list[0].weather[0].icon;

    console.log(max)
    console.log(icon)

    $("#forecastPlus1").empty();    // used JQuery
    document.querySelector("#forecastPlus1").innerHTML += `
    
        <div class="card" style="width: 11rem;">
        
            <div class="card-body">
                <h4 class="card-title">Tomorrow</h4>
                <img src="http://openweathermap.org/img/wn/${icon}@2x.png">
                <h6 class="card-text">Maximum Temp: ${max}</h6>
                <h6 class="card-text">Minimum Temp: ${min}</h6>
                <h6 class="card-text">Humidity: ${humidity}%</h6>
                <h6 class="card-text">Wind Speed (KPH): ${wind}</h6>
            </div>
        </div>
        `

    var max = getForecast.list[1].main.temp_max;
    var min = getForecast.list[1].main.temp_min;
    var humidity = getForecast.list[1].main.humidity;
    var wind = getForecast.list[1].wind.speed;
    var icon = getForecast.list[1].weather[0].icon

    
    $("#forecastPlus2").empty();    // used JQuery
    document.querySelector('#forecastPlus2').innerHTML += `
        <div class="card" style="width: 11rem;">
            
            <div class="card-body">
                <h4 class="card-title">+ 2 Days</h4>
                <img src="http://openweathermap.org/img/wn/${icon}@2x.png">
                <h6 class="card-text">Maximum Temp ${max}</h6>
                <h6 class="card-text">Minimum Temp ${min}</h6>
                <h6 class="card-text">Humidity: ${humidity}%</h6>
                <h6 class="card-text">Wind Speed (KPH) ${wind}</h6>
            </div>
        </div>`
        
        var max = getForecast.list[2].main.temp_max;
    var min = getForecast.list[2].main.temp_min;
    var humidity = getForecast.list[2].main.humidity;
    var wind = getForecast.list[2].wind.speed;
    var icon = getForecast.list[2].weather[0].icon

    $("#forecastPlus3").empty();    // used JQuery
    document.querySelector('#forecastPlus3').innerHTML += `
        <div class="card" style="width: 11rem;">
            
            <div class="card-body">
                <h4 class="card-title">+ 3 Days</h4>
                <img src="http://openweathermap.org/img/wn/${icon}@2x.png">
                <h6 class="card-text">Maximum Temp ${max}</h6>
                <h6 class="card-text">Minimum Temp ${min}</h6>
                <h6 class="card-text">Humidity: ${humidity}%</h6>
                <h6 class="card-text">Wind Speed (KPH) ${wind}</h6>
            </div>
        </div>`
        
    var max = getForecast.list[3].main.temp_max;
    var min = getForecast.list[3].main.temp_min;
    var humidity = getForecast.list[3].main.humidity;
    var wind = getForecast.list[3].wind.speed;
    var icon = getForecast.list[3].weather[0].icon

    $("#forecastPlus4").empty();    // used JQuery
    document.querySelector('#forecastPlus4').innerHTML += `
        <div class="card" style="width: 11rem;">
            
            <div class="card-body">
                <h4 class="card-title">+ 4 Days</h4>
                <img src="http://openweathermap.org/img/wn/${icon}@2x.png">
                <h6 class="card-text">Maximum Temp ${max}</h6>
                <h6 class="card-text">Minimum Temp ${min}</h6>
                <h6 class="card-text">Humidity: ${humidity}%</h6>
                <h6 class="card-text">Wind Speed (KPH) ${wind}</h6>
            </div>
        </div>`

    var max = getForecast.list[4].main.temp_max;
    var min = getForecast.list[4].main.temp_min;
    var humidity = getForecast.list[4].main.humidity;
    var wind = getForecast.list[4].wind.speed;
    var icon = getForecast.list[4].weather[0].icon

    
    $("#forecastPlus5").empty();    // used JQuery
    document.querySelector('#forecastPlus5').innerHTML += `
        <div class="card" style="width: 11rem;">
            
            <div class="card-body">
                <h4 class="card-title">+ 5 Days</h4>
                <img src="http://openweathermap.org/img/wn/${icon}@2x.png">
                <h6 class="card-text">Maximum Temp ${max}</h6>
                <h6 class="card-text">Minimum Temp ${min}</h6>
                <h6 class="card-text">Humidity: ${humidity}%</h6>
                <h6 class="card-text">Wind Speed (KPH) ${wind}</h6>
            </div>
        </div>`
        }

