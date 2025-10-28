import "./App.css";
import { useState } from "react";
import CityList from "./components/CityList";
import CityForecast from "./components/CityForecast";
function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="App">
      <h1>City Weather Forecast</h1>
      {!selectedCity ? (
        <CityList onSelectCity={setSelectedCity} />
      ) : (
        <CityForecast
          city={selectedCity}
          onBack={() => setSelectedCity(null)}
        />
      )}
    </div>
  );
}

export default App;
