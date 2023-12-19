import City from "./City";
import styles from "./CityList.module.css";

function CityList({ cities }) {
  console.log(cities);
  return (
    <ul className={styles.cityList}>
      {cities.map((city, index) => {
        <p>{city.cityName}</p>;
      })}
    </ul>
  );
}

export default CityList;
