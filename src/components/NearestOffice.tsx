import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import haversine from 'haversine';
import 'leaflet/dist/leaflet.css';
import userMarker from './user_marker.png';
import officeMarker from './office_marker.png';
import L from "leaflet"
import './NearestOffice.css';

type Location = {
    name: string;
    latitude: number;
    longitude: number;
};

const userIcon = L.icon({
    iconUrl: userMarker,
    iconSize: [20, 32],
    iconAnchor: [10, 32],
    popupAnchor: [1, -28],
    shadowSize: [32, 32]
});

const officeIcon = L.icon({
    iconUrl: officeMarker,
    iconSize: [20, 32],
    iconAnchor: [10, 32],
    popupAnchor: [1, -28],
    shadowSize: [32, 32]
});

const offices: Location[] = [
    {
        name: 'Heinolan toimipiste',
        latitude: 61.208900,
        longitude: 26.058040,
    },
    {
        name: 'Mikkelin toimipiste',
        latitude: 61.644965,
        longitude: 27.233789,
    },
    {
        name: 'Lahden toimipiste',
        latitude: 60.978429,
        longitude: 25.693383,
    },
];

const NearestOffice: React.FC = () => {
    const [userLocation, setUserLocation] = useState<Location | null>(null);
    const [nearestLocation, setNearestLocation] = useState<Location | null>(null);
    const [distanceInKm, setDistanceInKm] = useState<number | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserLocation({
                    name: 'Sinun sijaintisi',
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            (error) => {
                console.error('Geolocation error:', error);
            }
        );
    }, []);

    useEffect(() => {
        const findNearestOffice = (userLocation: Location) => {
            let nearestOffice = offices[0];
            let nearestDistance = haversine(
                { latitude: userLocation.latitude, longitude: userLocation.longitude },
                { latitude: nearestOffice.latitude, longitude: nearestOffice.longitude },
                { unit: 'km' }
            );

            offices.forEach((office) => {
                const distance = haversine(
                    { latitude: userLocation.latitude, longitude: userLocation.longitude },
                    { latitude: office.latitude, longitude: office.longitude },
                    { unit: 'km' }
                );

                if (distance < nearestDistance) {
                    nearestDistance = distance;
                    nearestOffice = office;
                }
            });

            return nearestOffice;
        };

        if (userLocation) {
            const nearest = findNearestOffice(userLocation);
            if (nearest) {
                setNearestLocation(nearest);


                const distance = haversine(
                    { latitude: userLocation.latitude, longitude: userLocation.longitude },
                    { latitude: nearest.latitude, longitude: nearest.longitude },
                    { unit: 'km' }
                );
                setDistanceInKm(distance);
            }
        }
    }, [userLocation]);

    return (
        <div>
            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#d8d8ff', borderRadius: '5px', marginBottom: '1rem' }}>
                <h1 className="glow">Meistä infoa</h1>
                <p style={{ fontSize: '15px' }}>PuhtaanaPitoPlus on perheomisteinen siivousalan yritys, joka on perustettu vuonna 2010. Yrityksen perustajat, Rouva ja Herra Tuntematon, haluavat tarjota laadukkaita ja luotettavia siivouspalveluita paikallisille asukkaille ja yrityksille. Yli kymmenen vuoden aikana PuhtaanaPitoPlus on kasvanut merkittävästi ja laajentanut palveluvalikoimaansa sekä toiminta-aluettaan.</p>

                <p style={{ fontSize: '15px' }}>Nykyään PuhtaanaPitoPlus tarjoaa monipuolisia siivouspalveluita, kuten kotisiivousta, toimistosiivousta, saunojen siivouksia ja yrityssiivousta. Meidän ammattitaitoinen henkilökuntamme on sitoutunut tarjoamaan erinomaista palvelua ja pitämään asiakkaiden tilat puhtaina ja viihtyisinä.</p>

                <p style={{ fontSize: '15px' }}>PuhtaanaPitoPlus toimii kolmessa eri toimipisteessä, jotka sijaitsevat Mikkelissä, Heinolassa ja Lahdessa. Näissä toimipisteissä myymme pieniä eriä siivoustarvikkeita ja kemikaaleja yrityksille ja asiakkaille, jotka voivat hoitaa omaa siivoustaan tehokkaasti ja turvallisesti.</p>

                <p style={{ fontSize: '15px' }}>Yrityksemme motto on "Puhtaus on puoli ruokaa". PuhtaanaPitoPlus on ylpeä paikallisista juuristaan ja pyrkii tukemaan paikallista yhteisöä tarjoamalla työpaikkoja ja kestävää palvelua.</p>

            </div>
            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#d8d8ff', borderRadius: '5px', marginBottom: '1rem' }}>
                TÄSTÄ VOIT ETSIÄ LÄHIMMÄN TOIMISTOMME:
                <p style={{ fontSize: '15px' }}>Ohjeistus: klikkaa kartan merkkiä löytääksesi lähimmän toimistomme. Näet kartalla sinun sijaintisi
                    punaisella merkillä, sekä meidän lähimmän toimipisteemme mustan rakennuksen merkillä. Kartan alapuolella ilmoitetaan kilometrimäärä meidän lähimmälle toimipisteelle sinun sijainnistasi</p>
            </div>
            {userLocation && (
                <MapContainer
                    center={[userLocation.latitude, userLocation.longitude]}
                    zoom={13}
                    style={{ height: '400px', width: '100%' }}
                    maxBounds={[
                        [90, 180],
                        [-90, -180],
                    ]}
                    minZoom={2}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[userLocation.latitude, userLocation.longitude]} icon={userIcon}>
                        <Popup>Sinun sijaintisi</Popup>
                    </Marker>
                    {nearestLocation && (
                        <Marker position={[nearestLocation.latitude, nearestLocation.longitude]} icon={officeIcon}>
                            <Popup>{nearestLocation.name}</Popup>
                        </Marker>
                    )}
                </MapContainer>
            )
            }
            {
                distanceInKm && (


                    <p>
                        Sinulla on meidän lähimmälle toimistolle matkaa {distanceInKm.toFixed(2)} kilometriä.
                    </p>
                )
            }
        </div >
    );
};

export default NearestOffice;
