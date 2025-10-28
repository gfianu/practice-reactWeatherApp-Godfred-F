export default function CityList({ onSelectCity }) {
  const cities = ["New York", "London", "Tokyo"];

  return (
    <div>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            <button
              onClick={() => {
                onSelectCity(city);
              }}
            >
              {city}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
