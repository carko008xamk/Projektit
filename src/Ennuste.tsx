import { useState, useEffect } from "react";
import axios from "axios";
import './Ennuste.css';

interface Ennuste {
    dt_txt: string;
    weather: {
        description: string;
        icon: string;
    }[];
    main: {
        temp: number;
    };
}

interface SaaEnnusteProps {
    kaupunki: string;
}

const SaaEnnuste = ({ kaupunki }: SaaEnnusteProps) => {
    const [ennuste, setEnnuste] = useState<Ennuste[]>([]);
    const [virheilmoitus, setVirheilmoitus] = useState("");

    useEffect(() => {
        const fetchEnnuste = async () => {
            try {
                const result = await axios(
                    `https://xamkbit.azurewebsites.net/saaennuste/${kaupunki}`
                );
                setEnnuste(result.data.list);
                setVirheilmoitus("");
            } catch (error) {
                console.error(error);
                setEnnuste([]);
                setVirheilmoitus(`Ennustetta ei voitu hakea paikkakunnalle ${kaupunki}.`);
            }
        };
        fetchEnnuste();
    }, [kaupunki]);

    const suodatettuEnnuste = ennuste && ennuste.filter((e) => {
        const date = new Date(e.dt_txt);
        const hours = date.getHours();
        return hours === 3 || hours === 15;
    });
    return (
        <div>
            <h1>Ennuste</h1>
            <h2>{kaupunki.charAt(0).toUpperCase() + kaupunki.slice(1)}</h2>
            {virheilmoitus && (
                <p>{virheilmoitus}</p>
            )}
            <table>
                <thead>
                    <tr>
                        <th>Aika</th>
                        <th>Päivämäärä</th>
                        <th>Kuvaus</th>
                        <th>Lämpötila</th>
                    </tr>
                </thead>
                <tbody>
                    {suodatettuEnnuste && suodatettuEnnuste.map((e) => {
                        const date = new Date(e.dt_txt);
                        const kuvaus = e.weather[0].description;
                        const ikoniUrl = `https://openweathermap.org/img/wn/${e.weather[0].icon}.png`;
                        const aika = date.toLocaleString("fi-FI", {
                            hour: "2-digit",
                            minute: "2-digit",
                            timeZone: "Europe/Helsinki"
                        });
                        const paivamaara = date.toLocaleDateString("fi-FI", {
                            weekday: "long",
                            day: "numeric",
                            month: "numeric",
                            year: "numeric",
                            timeZone: "Europe/Helsinki"
                        }).replace(".", ".").replace(".", ".");

                        return (
                            <tr key={e.dt_txt}>
                                <td>{aika}</td>
                                <td>{paivamaara}</td>
                                <td><img src={ikoniUrl} alt={kuvaus} /> {kuvaus}</td>
                                <td>{Math.round(e.main.temp)} &#8451;</td>
                            </tr>
                        );
                    })}
                </tbody>

            </table>
        </div>
    );
};

export default SaaEnnuste;

