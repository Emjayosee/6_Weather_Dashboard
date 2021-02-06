


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
    var humidity = getWeather.main.humidity
    var wind = getWeather.wind.speed

    console.log(`url: ${temp}`)

    document.querySelector('#currentWeather').innerHTML += `
    <div id="CurrentTitle" class="card2-title style="width: 30rem><h1>Current Weather</h1></div>
    <div class="card" style="width: 30rem;">
        
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <h6 class="card-text">The weather is  ${desc}.</h6>
            <h6 class="card-text">The current temperature is  ${temp} degrees celsius, but it feels like ${feel} degrees celsius.</h6>
            <h6 class="card-text">The humidity is  ${humidity}.</h6>
            <h6 class="card-text">The wind speed is  ${wind}.</h6>
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

    

    // // Loop over all forecasts in 3 hour increments starting at [0]
    // for (let i = 0; i < getForecast.length; i++) {
    //     if (getForecast.list[i].dt_txt.indexOf("15:00:00") !== -1){

    var max = getForecast.list[0].main.temp_max;
    var min = getForecast.list[0].main.temp_min;
    var wind = getForecast.list[0].wind.speed;
    console.log(`Max Temp url: ${max}`)
    console.log(`Min Temp url: ${min}`)
    console.log(`Wind Speed url: ${wind}`)

    document.querySelector('#FiveDayTitle').innerHTML += `
        <div class="FiveDayTitle style="width: 30rem><h2>Five-Day Forecast:</h2></div>
        `

    document.querySelector('#forecastPlus1').innerHTML += `
    
        <div class="card" style="width: 10rem;">
        
            <div class="card-body">
                <h4 class="card-title">Tomorrow</h4>
                <h6 class="card-text">Maximum Temp ${max}</h6>
                <h6 class="card-text">Minimum Temp ${min}</h6>
                <h6 class="card-text">Wind Speed ${wind}</h6>
            </div>
        </div>
        `
        
    var max = getForecast.list[1].main.temp_max;
    var min = getForecast.list[1].main.temp_min;
    var wind = getForecast.list[1].wind.speed;
    console.log(`Max Temp url: ${max}`)
    console.log(`Min Temp url: ${min}`)
    console.log(`Wind Speed url: ${wind}`)

    document.querySelector('#forecastPlus2').innerHTML += `
        <div class="card" style="width: 10rem;">
            
            <div class="card-body">
            <h4 class="card-title">+ 2 Days</h4>
                <h6 class="card-text">Maximum Temp ${max}</h6>
                <h6 class="card-text">Minimum Temp ${min}</h6>
                <h6 class="card-text">Wind Speed ${wind}</h6>
            </div>
        </div>`
        
        var max = getForecast.list[2].main.temp_max;
    var min = getForecast.list[2].main.temp_min;
    var wind = getForecast.list[2].wind.speed;
    console.log(`Max Temp url: ${max}`)
    console.log(`Min Temp url: ${min}`)
    console.log(`Wind Speed url: ${wind}`)

    document.querySelector('#forecastPlus3').innerHTML += `
        <div class="card" style="width: 10rem;">
            
            <div class="card-body">
            <h4 class="card-title">+ 3 Days</h4>
                <h6 class="card-text">Maximum Temp ${max}</h6>
                <h6 class="card-text">Minimum Temp ${min}</h6>
                <h6 class="card-text">Wind Speed ${wind}</h6>
            </div>
        </div>`
        
    var max = getForecast.list[3].main.temp_max;
    var min = getForecast.list[3].main.temp_min;
    var wind = getForecast.list[3].wind.speed;
    console.log(`Max Temp url: ${max}`)
    console.log(`Min Temp url: ${min}`)
    console.log(`Wind Speed url: ${wind}`)

    document.querySelector('#forecastPlus4').innerHTML += `
        <div class="card" style="width: 10rem;">
            
            <div class="card-body">
            <h4 class="card-title">+ 4 Days</h4>
                <h6 class="card-text">Maximum Temp ${max}</h6>
                <h6 class="card-text">Minimum Temp ${min}</h6>
                <h6 class="card-text">Wind Speed ${wind}</h6>
            </div>
        </div>`

        var max = getForecast.list[4].main.temp_max;
    var min = getForecast.list[4].main.temp_min;
    var wind = getForecast.list[4].wind.speed;
    console.log(`Max Temp url: ${max}`)
    console.log(`Min Temp url: ${min}`)
    console.log(`Wind Speed url: ${wind}`)

    document.querySelector('#forecastPlus5').innerHTML += `
        <div class="card" style="width: 10rem;">
            
            <div class="card-body">
            <h4 class="card-title">+ 5 Days</h4>
                <h6 class="card-text">Maximum Temp ${max}</h6>
                <h6 class="card-text">Minimum Temp ${min}</h6>
                <h6 class="card-text">Wind Speed ${wind}</h6>
            </div>
        </div>`
        }


//     }
// }
