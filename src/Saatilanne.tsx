import { useState, useEffect } from "react";
import axios from "axios";

interface Saa {
    weather: {
        description: string;
        icon: string;
    }[];
    main: {
        temp: number;
    };
    name: string;
}

interface SaatilanneProps {
    kaupunki: string;
}

const Saatilanne = ({ kaupunki }: SaatilanneProps) => {
    const [saa, setSaa] = useState<Saa | null>(null);
    const [virheilmoitus, setVirheilmoitus] = useState<string>("");

    useEffect(() => {
        const fetchSaa = async () => {
            try {
                const result = await axios(
                    `https://xamkbit.azurewebsites.net/saatilanne/${kaupunki}`
                );
                const data = await result.data;
                if (data.cod === "404") {
                    setVirheilmoitus(`Paikkakuntaa ${kaupunki} ei löytynyt`);
                    setSaa(null);
                } else {
                    setSaa(data);
                    setVirheilmoitus("");
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchSaa();
    }, [kaupunki]);

    if (!saa) {
        return <div>{virheilmoitus ? virheilmoitus : "Ladataan..."}</div>;
    }

    const saaKuvaus = saa.weather[0].description;
    const saaLampotila = saa.main.temp;
    const kaupunkiNimi = saa.name;
    const ikoniUrl = `https://openweathermap.org/img/wn/${saa.weather[0].icon}.png`;

    return (
        <div>
            <h2>{kaupunkiNimi}</h2>
            <img src={ikoniUrl} alt={saaKuvaus} />
            <p>{saaKuvaus}</p>
            <p>{Math.round(saaLampotila)} &#8451;</p>
        </div>
    );
};

export default Saatilanne;

