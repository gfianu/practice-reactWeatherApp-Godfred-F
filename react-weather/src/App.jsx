
import './App.css'
import { useState } from 'react'
import CityList from './components/CityList' 
import CityForecast from './components/CityForecast'
function App() {

  const [selectedCity, setSelectedCity] = useState(null)

  return (
    <>
<CityList setSelectedCity ={setSelectedCity} ></CityList>
<CityForecast selectedCity={selectedCity}> </ CityForecast>

    </>
  )
}

export default App
