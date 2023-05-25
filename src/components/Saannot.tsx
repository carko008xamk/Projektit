import React from 'react';
import { Link } from 'react-router-dom';
import './Saannot.css';

// Määritetään Saannot-komponentti
const Saannot: React.FC = () => {
    return (
        <div>
            <h1>Säännöt</h1>


            <p>1 § Kilpailukala on ahven. Kilpailijan on tuotava punnitusalueelle kaikki muutkin pilkkimänsä kalat, järvelle ei saa jättää yhtään kalaa. Muita kaloja ei saa olla punnituserässä kuin ahventa.</p>

            <p>2 § Kilpailuaika on kolme (3) tuntia. Siirtymäaikaa kilpailualueelle sisältyy kilpailuaikaan, paluuaikaa on 30 min. jonka kuluessa tulee olla  punnitusalueella. Kalastus aloitetaan ja lopetetaan selvällä äänimerkillä. Kilpailun aikana kilpailualueelta poistuminen on kielletty. Kilpailualue käsittää Valkiajärven. Uimarannalla olevalla wc:ssä saa asioida. Kilpailualueella on liikuttava jalan. Tuomarineuvosto voi myöntää liikuntaesteiselle poikkeusluvan myös muunlaiseen liikkumiseen. Valkiajärvellä on voimassa erityis kielto, että varuskunnan puoleiselle rannalle ei saa nousta kuin äärimmäisessä hätätapauksessa. </p>

            <p>3 § Akkukäyttöisen kairan käyttö on sallittu. Akkukäyttöisessä kairassa pitää olla apukahva. Saa kairata yhden avannon ja siittä pitää pilkkiä ennen uuden reiän tekoa akkukairalla.</p>

            <p>4 § Jokaisella alle 15-vuotiaalla saa olla nimetty tukihenkilö. Tukihenkilö saa antaa kairausapua ja avustaa kalan irrottamisessa koukusta, mutta ei muuten fyysisesti voi osallistua pilkkimiseen.</p>

            <p>5 § Syötteinä käytetään eläviä syöttejä. Syötin on oltava pilkin koukussa. Kaloja ja kalan paloja ei saa käyttää syötteinä. Hajustetahnan käyttö on kielletty. Samoin houkuttimien käyttö kuten ryynien, matojen, toukkien tms., pudottaminen avantoon on kielletty. Kaikenlainen roskaaminen ja syöttien jättäminen jäälle on kielletty. </p>

            <p>6 § Kilpailija saa käyttää vain yhtä (1) onkea kerrallaan vedessä. </p>

            <p>7 § Kilpailun ja lain sallima kala tulee jäällenoston jälkeen välittömästi tappaa, mutta jättää suolistamatta. Ennen punnitusta suolistettuja kaloja ei punnita. </p>

            <p>8 § Pilkkiminen ja reiän kairaaminen viittä metriä lähemmäksi toista kilpailijaa on kielletty. Lähtö- ja punnitusalueella liikuttaessa kairan terän on oltava suojattuna. Kilpailualueella (Jäällä) kairan ei tarvitse olla suojattuna. Pilkkimisen ajaksi jääkairaa ei saa jättää pitkälleen jäälle, vaan se on kairattava pystyyn tai oltava asianmukaisesti suojattuna. </p>

            <p>9 § Kilpailijoiden paremmuuden ratkaisee saaliin paino (g). Mikäli paino on sama, ratkaisee kalojen kappalemäärä. Mikäli sekin on tasan, voittaa se, jolla on suurin kala. Muiden kuin 10 parhaan palkintosijan kohdalla saaliin ollessa sama, sijoitus ratkaistaan arvalla. </p>

            <p> 10 § Häiritsevä käyttäytyminen kilpailualueella on kielletty.</p>

            <p>11 § Jokainen kilpailija osallistuu kilpailuun omalla vastuullaan ja huolehtii omasta turvallisuudestaan. </p>

            <p>12 § Tuomarineuvoston muodostaa kilpailunjohtaja ja paikalla olevat osuuskunnan hoitokunnan jäsenet. </p>

            <p>13 § Pilkkikilpailuun osallistuva kilpailija sitoutuu noudattamaan näitä sääntöjä. </p>

            <p>14 § Kilpailun järjestäjä voi vielä kilpailupäivänä, ennen kilpailun alkua antaa kilpailua koskevia ohjeita, joita tulee noudattaa.</p>

            <p>15 § Näiden edellä esitettyjen kilpailusääntöjen osittainenkin rikkominen aiheuttaa kilpailijan suorituksen hylkäämisen. Päätöksen hylkäämisestä tekee tuomarineuvosto. Osallistumalla pilkkikilpailuun kilpailija sitoutuu noudattamaan näitä sääntöjä.</p>
            <div className="saannot-container">
                <Link to="/">Takaisin aloitussivulle</Link>
            </div>
        </div>
    );
}

export default Saannot;