import { useState, useEffect, useRef } from "react";
import weatherInfo from "./weatherInfo";

function CityForecast({ city, onBack }) {
  const [forecast, setForecast] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (city) {
      setForecast(null);
      setShowDetails(false);
      setTimeout(() => {
        setForecast(weatherInfo[city]);
      }, 1000);
    }
  }, [city]);

  const handleScroll = () => {
    setShowDetails(true);
    detailsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!forecast) return <p>Loading weather data...</p>;
  if (!weatherInfo[city]) return <p>Weather data not available for {city}</p>;

  return (
    <div>
      <h2>{city} Forecast</h2>
      <p>{forecast.summary}</p>
      <button onClick={handleScroll}>View Details</button>
      <button onClick={onBack}>Back to City List</button>
      {showDetails && (
        <div ref={detailsRef} style={{ marginTop: "50px" }}>
          <h3>Details</h3>
          <p>{forecast.details}</p>
        </div>
      )}
    </div>
  );
}

export default CityForecast;
