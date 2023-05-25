import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-info">
                    <h3>Heinolan toimipiste:</h3>
                    <p>PuhtaanapitoPlus Oy</p>
                    <p>Osoite: Esimerkkikatu 123, 12345 Heinola</p>
                    <p>Aukioloajat: Ma-Pe klo 9-17</p>
                    <p>Puh: 0123456789</p>
                </div>
                <div className="footer-info">
                    <h3>Mikkelin toimipiste:</h3>
                    <p>PuhtaanapitoPlus Oy</p>
                    <p>Osoite: Esimerkkikatu 234, 12345 Mikkeli</p>
                    <p>Aukioloajat: Ma-Pe klo 9-17</p>
                    <p>Puh: 0123456789</p>
                </div>
                <div className="footer-info">
                    <h3>Lahden toimipiste:</h3>
                    <p>PuhtaanapitoPlus Oy</p>
                    <p>Osoite: Esimerkkikatu 345, 12345 Lahti</p>
                    <p>Aukioloajat: Ma-Pe klo 9-17</p>
                    <p>Puh: 0123456789</p>
                </div>
                <div className="footer-links">
                    <a href="#">Käyttöehdot</a>{' '}
                    <span>|</span>{' '}
                    <a href="#">Tietosuojaseloste</a>
                    <br />
                    <a href="#">Facebook</a>{' '}
                    <a href="#">Instagram</a>
                    <p> </p>
                    <br />
                    <form>
                        <label htmlFor="newsletter">Tilaa uutiskirje:</label>{' '}
                        <input type="email" id="newsletter" name="newsletter" placeholder="Sähköpostiosoite" required />
                        <button type="submit">Tilaa</button>
                    </form>
                </div>
            </div>
            <div className="legal-info">
                <p>&copy; PuhtaanapitoPlus Oy 2023</p>
            </div>
        </footer>
    );
}

export default Footer;


