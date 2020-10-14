import React from 'react';

import mapMarkerImg from '../images/Map.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/map.css';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const Mapper = () => {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"></img>

                    <h2>Escolha uma casa de repouso no mapa</h2>
                    <p>Muitos idosos estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Santa Teresa</strong>
                    <span> Espirito Santo</span>
                </footer>
            </aside>

            <Map
                center={[19.9379388, -40.6161624]}
                zoom={14}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.title.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="" className="create-casaDeRepouso">
                <FiPlus size={32} color="#FFF"></FiPlus>
            </Link>
        </div>
    );
}

export default Mapper;