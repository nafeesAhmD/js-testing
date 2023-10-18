const inputBox = document.querySelector('.input-box')
const searchBtn = document.querySelector('.search-btn')
const weatherImg = document.querySelector('.weather-img')
const temp = document.querySelector('.temp')
const description = document.querySelector('.description')
const location1 = document.querySelector('.location')
const humidity = document.querySelector('#humidity')
const windSpeed = document.querySelector('#wind-speed')


async function checkWeather(city){
    const api_key = "454dbdcc9a5ca6779d2c5c6e9b18978f"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weatherData = await fetch(`${url}`)
    .then((respons) => respons.json())

    console.log(weatherData)
    
    temp.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`
    description.innerHTML = `${weatherData.weather[0].description}`
    location1.innerHTML = `${weatherData.name}`

    humidity.innerHTML = `${weatherData.main.humidity}%`
    windSpeed.innerHTML = `${weatherData.wind.speed}Km/H`
    
    if(weatherData.weather[0].main == "Clouds"){
        weatherImg.src = "./Images/clouds.png"
    }
    else if(weatherData.weather[0].main == "Clear"){
        weatherImg.src = "./Images/clear.png"
    }
    else if(weatherData.weather[0].main == "Drizzle"){
        weatherImg.src = "./Images/drizzle.png"
    }
    else if(weatherData.weather[0].main == "Rain"){
        weatherImg.src = "./Images/rain.png"
    }
    else if(weatherData.weather[0].main == "Mist"){
        weatherImg.src = "./Images/mist.png"
    }
}

searchBtn.addEventListener('click',function(){
    checkWeather(inputBox.value)
    inputValEmpty()
         
})
function inputValEmpty(){
    inputBox.value = ""
}
