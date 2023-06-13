const getWeather=(city)=>{
cityName.innerHTML=city;
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const promise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
promise.then((x) => {
    return x.json();
}).then((x) => {
    console.log(x);
    temp1.innerHTML = x.main.temp;
    temp.innerHTML = x.main.temp;
    temp_min.innerHTML = x.main.temp_min;
    temp_max.innerHTML = x.main.temp_max;
    wind_speed1.innerHTML = x.wind.speed;
    wind_speed.innerHTML = x.wind.speed;
    Pressure.innerHTML = x.main.pressure;
    feels_like.innerHTML = x.main.feels_like;
    weather1.innerHTML = x.weather[0].main;
    sunrise.innerHTML = x.sys.sunrise;
    sunset.innerHTML = x.sys.sunset;
    visibility.innerHTML = x.visibility;
    
}).catch((err) => {
    console.log(err);
});
}


submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value)
})
getWeather("Los Angeles");





const parisWeather=()=>{
    const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
    const promise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${API_KEY}&units=metric`);
    promise.then((x) => {
        return x.json();
    }).then((x) => {
        console.log(x);
        paris_temp.innerHTML = x.main.temp;
        paris_min_temp.innerHTML = x.main.temp_min;
        paris_max_temp.innerHTML = x.main.temp_max;
        paris_pressure.innerHTML = x.main.pressure;
    }).catch((err) => {
        console.log(err);
    });
    }
    parisWeather();
    

    const sydneyWeather=()=>{
        const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
        const promise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=${API_KEY}&units=metric`);
        promise.then((x) => {
            return x.json();
        }).then((x) => {
            console.log(x);
            sydney_temp.innerHTML = x.main.temp;
            sydney_min_temp.innerHTML = x.main.temp_min;
            sydney_max_temp.innerHTML = x.main.temp_max;
            sydney_pressure.innerHTML = x.main.pressure;
        }).catch((err) => {
            console.log(err);
        });
        }
        sydneyWeather();


        const londonWeather=()=>{
            const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
            const promise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`);
            promise.then((x) => {
                return x.json();
            }).then((x) => {
                console.log(x);
                london_temp.innerHTML = x.main.temp;
                london_min_temp.innerHTML = x.main.temp_min;
                london_max_temp.innerHTML = x.main.temp_max;
                london_pressure.innerHTML = x.main.pressure;
            }).catch((err) => {
                console.log(err);
            });
            }
            londonWeather();

            
            const newyorkWeather=()=>{
                const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
                const york="New York";
                const promise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${york}&appid=${API_KEY}&units=metric`);
                promise.then((x) => {
                    return x.json();
                }).then((x) => {
                    console.log(x);
                    newyork_temp.innerHTML = x.main.temp;
                    newyork_min_temp.innerHTML = x.main.temp_min;
                    newyork_max_temp.innerHTML = x.main.temp_max;
                    newyork_pressure.innerHTML = x.main.pressure;
                }).catch((err) => {
                    console.log(err);
                });
                }
                newyorkWeather();

                
                const californiaWeather=()=>{
                    const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
                    const promise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=California&appid=${API_KEY}&units=metric`);
                    promise.then((x) => {
                        return x.json();
                    }).then((x) => {
                        console.log(x);
                        california_temp.innerHTML = x.main.temp;
                        california_min_temp.innerHTML = x.main.temp_min;
                        california_max_temp.innerHTML = x.main.temp_max;
                        california_pressure.innerHTML = x.main.pressure;
                    }).catch((err) => {
                        console.log(err);
                    });
                    }
                    californiaWeather();
                    
















