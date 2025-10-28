import { useState, useEffect, useRef } from "react";
import { weatherData } from "./WeatherData";

 function CityForecast ({selectedCity}) {

    const [forecast, setForecast] = useState(null);

    useEffect (()=> {
console.log(weatherData)

    }, [weatherData])

    return (
<>
<h1>{ selectedCity}</h1>

</>
    )
}


export default CityForecast