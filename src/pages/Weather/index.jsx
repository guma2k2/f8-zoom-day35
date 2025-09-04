import { useState } from "react";
import styles from "./Weather.module.scss";
function Weather() {
    const [weather, setWeather] = useState({
        hanoi: { city: "Hà Nội", temp: 28, weather: "Nắng ☀️", humidity: 65 },
        hcm: { city: "TP.HCM", temp: 32, weather: "Có mây 🌥️", humidity: 78 },
        danang: { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ 🌦️", humidity: 82 },
    });
    const [city, setCity] = useState(Object.keys(weather)[0]);

    const handleChange = (e) => {
        const selected = e.target.value;
        console.log(selected);
        setCity(selected);
    };

    const handleReset = () => {
        setWeather((prev) => {
            const updated = Object.fromEntries(
                Object.entries(prev).map(([key, value]) => [
                    key,
                    {
                        ...value,
                        temp: Math.floor(Math.random() * 2) == 0 ? value.temp + 5 : value.temp - 5,
                        humidity: Math.floor(Math.random() * 2) == 0 ? value.humidity + 5 : value.humidity - 5,
                    },
                ])
            );
            return updated;
        });
    };
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Weather App</h1>

            <select onChange={handleChange} className={styles.select}>
                {Object.entries(weather).map(([key, item]) => (
                    <option key={key} value={key}>
                        {item.city}
                    </option>
                ))}
            </select>

            {city && (
                <div className={styles.info}>
                    <h3 className={styles.city}>{weather[city].city}</h3>
                    <div className={styles.temp}>Nhiệt độ: {weather[city].temp}°C</div>
                    <div className={styles.desc}>Thời tiết: {weather[city].weather}</div>
                    <div className={styles.humidity}>Độ ẩm: {weather[city].humidity}%</div>
                </div>
            )}

            <div className={styles.btnSuccess} onClick={handleReset}>
                Reset
            </div>
        </div>
    );
}

export default Weather;
