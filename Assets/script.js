


document.querySelector('#search').addEventListener('click',function(){
var getCity=document.querySelector('#cityName').value;
getWeatherSearch(getCity);
})

async function getWeatherSearch( question ){
    // get the pweather from weather place
    var fetchUrl = "https://api.openweathermap.org/data/2.5/weather?q="+question+"&APPID=6547225cae7c6979fe92842a6b897980&units=metric"
    console.log( `.. fetching from ${fetchUrl}` )
    getWeather = await fetch( fetchUrl ).then( r=>r.json() )
    console.log( `. fetched weather data: `, getWeather )

    console.log( `.. showing weather data!` )
    
    
    
        var temp = getWeather.main.temp
        var title = getWeather.name

        console.log( `url: ${temp}` )
        document.querySelector('#currentWeather').innerHTML += `
        <div class="card" style="width: 18rem;">
            
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h6 class="card-text">${temp}</h6>
            </div>
        </div>
        `

        
    
}