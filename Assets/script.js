


document.querySelector('#search').addEventListener('click', function () {
    var getCity = document.querySelector('#cityName').value;
    getWeatherSearch(getCity);
})

async function getWeatherSearch(question) {
    // get the current weather from openweathermap
    var fetchUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + question + "&APPID=6547225cae7c6979fe92842a6b897980&units=metric"

    console.log(`.. fetching from ${fetchUrl}`)

    getWeather = await fetch(fetchUrl).then(r => r.json())

    console.log(`. fetched weather data: `, getWeather)

    console.log(`.. showing weather data!`)

    var title = getWeather.name
    var temp = getWeather.main.temp
    var feel = getWeather.main.feels_like
    var desc = getWeather.weather[0].description

    console.log(`url: ${temp}`)

    document.querySelector('#currentWeather').innerHTML += `
    <div class="card" style="width: 30rem;">
        
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <h6 class="card-text">The weather is  ${desc}.</h6>
            <h6 class="card-text">The current temperature is  ${temp} degrees celsius,</h6>
            <h6 class="card-text">but it feels like ${feel} degrees celsius.</h6>
        </div>
    </div>
    `


    getFutureWeatherSearch(question);
}

async function getFutureWeatherSearch(question) {

    // get the forecast weather from openweathermap
    var fetchUrl2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + question + "&APPID=6547225cae7c6979fe92842a6b897980&units=metric"

    console.log(`.. fetching from ${fetchUrl2}`)

    getForecast = await fetch(fetchUrl2).then(r => r.json())

    console.log(`. fetched weather data: `, getForecast)

    console.log(`.. showing weather data!`)

    var max = getForecast.list[0].main.temp_max;
    var min = getForecast.list[0].main.temp_min;
    var wind = getForecast.list[0].wind.speed;
    var days = 5;

    console.log(`Max Temp url: ${max}`)
    console.log(`Min Temp url: ${min}`)
    console.log(`Wind Speed url: ${wind}`)

    //Loop over all forecasts in 3 hour increments starting at [0]
    for (let i = 0; i < fetchUrl2.length.list; i++) {
        if (fetchUrl2.list[i].dt_txt.indexOf("15:00:00") !== -1)

    document.querySelector('#forecastPlus1').innerHTML += `
        <div class="card" style="width: 10rem;">
            
            <div class="card-body">
                <h6 class="card-text">Maximum Temp ${max}</h6>
                <h6 class="card-text">Minimum Temp ${min}</h6>
                <h6 class="card-text">Wind Speed ${wind}</h6>
            </div>
        </div>
        `
    }
}
