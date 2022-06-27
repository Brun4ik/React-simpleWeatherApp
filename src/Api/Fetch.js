import axios from "axios";

const url = "http://api.openweathermap.org/data/2.5/weather"
const Key = "9ee6ac6f596f20fc39fd81d57c076347";

export const fetchWeather = async (city) => {
    const {data} = await axios.get(
        url, {
        params: {
            q: city,
            APPID: Key,
            units: "metric",
            lang: "ru",
        },
});
    return data;
};