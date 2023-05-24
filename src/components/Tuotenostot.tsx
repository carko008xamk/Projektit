import React from "react";
import "./Tuotenostot.css";
import pinkki from './pinkki.png';
import tummanpinkki from './tummanpinkki.png';
import tummansininen from './tummansininen.png';
import vihrea from './vihrea.png';
import sininen from './sininen.png';
import minttu from './minttu.png';

interface TuotenostotProps {
    setOstoskori: Function;
    ostoskori: { maara: number, loppusumma: number };
}

const Tuotenostot = ({ setOstoskori, ostoskori }: TuotenostotProps) => {

    const lisaaOstoskoriin = (hinta: number) => {
        setOstoskori({
            maara: ostoskori.maara + 1,
            loppusumma: ostoskori.loppusumma + hinta
        });
    }

    return (
        <div className="tuotenostot-container">
            <div className="tuotenostot-row">
                <div className="tuotenosto">
                    <img src={pinkki} alt="t_shirt1" />
                    <h4>Yksivärinen T-paita puuvillaa Väri: Vaalea pinkki</h4>
                    <p>Hinta: 19,90€</p>
                    <button onClick={() => lisaaOstoskoriin(19.9)}>Lisää ostoskoriin</button>
                </div>
                <div className="tuotenosto">
                    <img src={tummanpinkki} alt="t_shirt2" />
                    <h4>Yksivärinen T-paita puuvillaa Väri: Tummanpinkki</h4>
                    <p>Hinta: 19,90€</p>
                    <button onClick={() => lisaaOstoskoriin(19.9)}>Lisää ostoskoriin</button>
                </div>
                <div className="tuotenosto">
                    <img src={tummansininen} alt="t_shirt3" />
                    <h4>Yksivärinen T-paita puuvillaa Väri: Tummansininen</h4>
                    <p>Hinta: 19,90€</p>
                    <button onClick={() => lisaaOstoskoriin(19.9)}>Lisää ostoskoriin</button>
                </div>
            </div>
            <div className="tuotenostot-row">
                <div className="tuotenosto">
                    <img src={vihrea} alt="t_shirt4" />
                    <h4>Yksivärinen T-paita puuvillaa Väri: Vihreä</h4>
                    <p>Hinta: 19,90€</p>
                    <button onClick={() => lisaaOstoskoriin(19.9)}>Lisää ostoskoriin</button>
                </div>
                <div className="tuotenosto">
                    <img src={sininen} alt="t_shirt5" />
                    <h4>Yksivärinen T-paita puuvillaa Väri: Sininen</h4>
                    <p>Hinta: 19,90€</p>
                    <button onClick={() => lisaaOstoskoriin(19.9)}>Lisää ostoskoriin</button>
                </div>
                <div className="tuotenosto">
                    <img src={minttu} alt="t_shirt6" />
                    <h4>Yksivärinen T-paita puuvillaa Väri: Minttu</h4>
                    <p>Hinta: 19,90€</p>
                    <button onClick={() => lisaaOstoskoriin(19.9)}>Lisää ostoskoriin</button>
                </div>
            </div>
        </div>
    );
}

export default Tuotenostot;





