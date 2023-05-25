import './Etusivu.css';
import kuva from './clean.jpg';
import kuva_1 from './clean_1.jpg';
import kuva_2 from './clean_2.jpg';
import kuva_3 from './clean_3.jpg';
import kuva_4 from './clean_4.jpg';


const Etusivu = () => {
    return (
        <div
        >
            <h1>Tervetuloa PuhtaanapitoPlus siivouspalvelun sivuille!</h1>
            <p>Tarjoamme ammattitaitoista ja luotettavaa siivouspalvelua niin kotitalouksille kuin yrityksillekin. Meidän kokenut henkilökuntamme huolehtii kodin, toimiston tai vaikkapa saunan puhtaudesta jättäen asiakkaan ajan muuhun käyttöön.</p>
            <div className="card">
                <div className="image-container">
                    <img src={kuva} className="clean" alt="clean" />
                </div>
                <div className="content-container">
                    <h2>Kotisiivous</h2>
                    <p>Kotisiivouksessa käymme läpi kotisi tarpeet ja tarjoamme juuri sinun tarpeisiisi sopivan siivouspaketin. Voit valita minkä tahansa palveluistamme tai valita useamman palvelun yhdistelmän, jotta kotisi on aina juuri sellaisessa kunnossa kuin haluat.</p>
                </div>
            </div>
            <div className="card">
                <div className="image-container">
                    <img src={kuva_1} className="clean_1" alt="clean_1" />
                </div>
                <div className="content-container">
                    <h2>Toimistosiivous</h2>
                    <p>Toimistosiivouksessa huomioimme juuri teidän toimistonne tarpeet. Teemme työt nopeasti ja tehokkaasti, jotta työntekijät voivat keskittyä omaan työhönsä. Meillä on vuosien kokemus toimistosiivouksesta ja olemme ylpeitä siitä, että olemme saaneet palvella monia asiakkaita menestyksekkäästi.</p>
                </div>
            </div>
            <div className="card">
                <div className="image-container">
                    <img src={kuva_2} className="clean_2" alt="clean_2" />
                </div>
                <div className="content-container">
                    <h2>Saunan siivous</h2>
                    <p>Saunan siivous on erikoisosaamistamme ja voimme taata että asiakkaan sauna on aina puhtaana ja hygieenisenä. Saunan siivous sisältää mm. lauteiden pesun ja lattian pesun, sekä seinien pesun. Tarjoamme saunan siivouksen yksittäispalveluna tai osana kotisiivouspakettia.</p>
                    <img src={kuva_3} alt="saunansiivous" />
                </div>
                <div className="content-container">
                    <h2>Yrityssiivous</h2>
                    <p>Tarjoamme yrityksille kattavan siivouspalvelun, johon kuuluu mm. toimistojen, myymälöiden ja muiden liikehuoneistojen siivous. Meidän henkilökuntamme on koulutettu käsittelemään erilaisia siivousmenetelmiä, joten voit luottaa siihen, että toimistosi on aina puhtaana ja siistinä.</p>
                    <img src={kuva_4} alt="Yrityssiivouskuva" />
                </div>
            </div>
        </div>
    );
};

export default Etusivu;
