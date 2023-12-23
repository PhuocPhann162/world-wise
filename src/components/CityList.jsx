import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
import ButtonBack from "./ButtonBack";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function CityList() {
  const navigate = useNavigate();
  const { cities, isLoading } = useCities();
  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return (
      <Message
        message={"Add your first city by clicking on a city on the map"}
      />
    );
  }

  return (
    <>
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <CityItem city={city} key={city.id} />
        ))}
      </ul>
    </>
  );
}

export default CityList;
