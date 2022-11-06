API_KEY= "3d6dfc0218fe68d7e2747c4bace5363f";

const city= document.querySelector("#city");
const weather= document.querySelector("#weather");


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then((data) => {         
            city.innerText= data.name;
            weather.innerText = `${data.weather[0].main}, ${data.main.temp}C`;
    });
    
}

function onGeoError(){
    alert("Can not find you. No weather information for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);