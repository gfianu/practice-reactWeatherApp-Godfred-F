export default function CityList({setSelectedCity}) {
  const cities = ["New York", "London", "Tokyo"];

  return (
    <ul>
      {cities.map((city) => (
        <li
          key ={city} >
          <button onClick={() => { 

            setSelectedCity(city)
          }}>{city}</button>
        </li>
      ))}
    </ul>
  );
}
