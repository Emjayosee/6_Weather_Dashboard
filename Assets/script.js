


document.querySelector('#search').addEventListener('click',function(){
var getCity=document.querySelector('#cityName').value;
getWeatherSearch(getCity);
})

    async function getWeatherSearch( question ){
    // get the current weather from openweathermap
    var fetchUrl = "https://api.openweathermap.org/data/2.5/weather?q="+question+"&APPID=6547225cae7c6979fe92842a6b897980&units=metric"

    console.log( `.. fetching from ${fetchUrl}` )

    getWeather = await fetch( fetchUrl ).then( r=>r.json() )

    console.log( `. fetched weather data: `, getWeather )

    console.log( `.. showing weather data!` )
    
    var title = getWeather.name
    var temp = getWeather.main.temp
    var feel = getWeather.main.feels_like
    var desc = getWeather.weather[0].description

    console.log( `url: ${temp}` )

    document.querySelector('#currentWeather').innerHTML += `
    <div class="card" style="width: 18rem;">
        
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <h6 class="card-text">The weather is  ${desc}.</h6>
            <h6 class="card-text">The current tempeartue is  ${temp} degrees celsius,</h6>
            <h6 class="card-text">but it feels like ${feel} degrees celsius.</h6>
        </div>
    </div>
    `

var getCity=document.querySelector('#cityName').value;
getFutureWeatherSearch(getCity);


    async function getFutureWeatherSearch( question ){

        // get the forecast weather from openweathermap
        var fetchUrl2 = "https://api.openweathermap.org/data/2.5/forecast/hourly?q="+question+"&APPID=6547225cae7c6979fe92842a6b897980&units=metric"

        console.log( `.. fetching from ${fetchUrl2}` )
        
        getForecast = await fetch( fetchUrl2 ).then( r=>r.json() )
    
        console.log( `. fetched weather data: `, getForecast )
    
        console.log( `.. showing weather data!` )
        
        var max = getForecast.temp_max;
        var min = getForecast.temp_min;
        var wind = getForecast.wind;
        var days = 5;
    
        console.log( `url: ${temp.max}` )

        for (index = 0; index < array.length; index++) {
            
        document.querySelector('#forecastPlus1').innerHTML += `
        <div class="card" style="width: 18rem;">
            
            <div class="card-body">
                <h6 class="card-text">${temp_max}</h6>
                <h6 class="card-text">${temp_min}</h6>
                <h6 class="card-text">${wind}</h6>
            </div>
        </div>
        `
    }
}
}