
let data;
let search = document.getElementById("search");



search.addEventListener("input" , function(){
    weather(search.value).then((nour) => weatherInput(nour));
   

})

async function weather(city) {
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=28c18788e4af4744985164748240412&q=${city}&days=3&aqi=no&alerts=no`)
    
    if(response.ok){
        data = await response.json();
        console.log("weather" , data)
        return data;
    }
}
function weatherInput(nour){


    cartona = `
     <div class="card-group cardy ">
                <div class="card " >
                
               <div class="card-body sec-col">
                    <div class="d-flex justify-content-between muted fw-bold">
                        <span class="justify"></span>
                        <span class="self">${nour.forecast.forecastday[0].date}</span>
                    </div>
                    


                    <hr>
                    <p class="muted fw-bold">
                    ${nour.location.name}
                    </p>
                    <p class="font">${nour.current.temp_c}</p>
                    <div>
                        <img src="https:${nour.current.condition.icon}" width="100px" alt="${nour.current.condition.text}">
                    </div>
                <span class="color">${nour.forecast.forecastday[0].day.condition.text}</span>
                <br>
                <div class="d-flex justify-content-around muted" >
                    <span > <i class="fa-solid fa-umbrella"></i> ${nour.current.humidity}</span>
                    <span><i class="fa-solid fa-wind"></i> ${nour.current.wind_kph}km/h</span>
                    <span><i class="fa-regular fa-compass"></i> ${nour.current.wind_degree}</span>

                </div>
                </div>
                </div>
                <div class="card">
                
                <div class="card-body text-center thi-col">
                    <span class="text-center muted fw-bold">${nour.forecast.forecastday[1].date}</span>
                    <hr>
                <div class="py-4">
                    <img src="https:${nour.forecast.forecastday[1].day.condition.icon}" alt="${nour.forecast.forecastday[1].day.condition.text}">
                </div>
                <div>
                    <span class="p">${nour.forecast.forecastday[1].day.maxtemp_c}C</span>
                    <p>${nour.forecast.forecastday[2].day.mintemp_c}</p>
                    <p class="color">${nour.forecast.forecastday[1].day.condition.text}</p>
                </div>
                </div>
                </div>
                <div class="card">
                
                <div class="card-body text-center sec-col">
                    <span class="text-center muted fw-bold">${nour.forecast.forecastday[2].date}</span>
                    <hr>
                    <div class="py-4">
                        <img src="https:${nour.forecast.forecastday[2].day.condition.icon}" alt="${nour.forecast.forecastday[2].day.condition.text}">
                    </div>
                    <div>
                        <span class="p">${nour.forecast.forecastday[2].day.maxtemp_c}</span>
                        <p>${nour.forecast.forecastday[2].day.mintemp_c}</p>
                        <p class="color">${nour.forecast.forecastday[2].day.condition.text}</p>
                    </div>
                </div> 
                </div>
            </div>
    `
    document.getElementById("cardData").innerHTML = cartona;
}



