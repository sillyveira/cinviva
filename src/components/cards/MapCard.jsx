import React from "react";
import { Map, MapPin } from "../icons";
import Card from "../Card";
import { IconTitle } from "../IconTitle";
import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MapMarkers from "../MapMarkers";
import PropTypes from "prop-types";

// Fix para os ícones do Leaflet
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Typography } from "../Typography";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

/**
 * Componente MapCard
 * Exibe um mapa com marcadores e link para Google Maps
 * 
 * @param {Object} props
 * @param {Array} props.markers - Array de objetos com informações dos marcadores
 * @param {string} props.markers[].title - Título do marcador
 * @param {Array<number>} props.markers[].position - [latitude, longitude]
 * @param {string} [props.markers[].image] - URL da imagem (opcional)
 * @param {string} [props.markers[].description] - Descrição adicional (opcional)
 * @param {string} [props.googleMapsLink] - Link para o Google Maps (opcional)
 * @param {number} [props.zoom=16] - Nível de zoom inicial do mapa
 * @param {boolean} [props.withCard=true] - Se true, exibe o mapa dentro de um card com borda e título. Se false, exibe apenas o mapa
 * @param {string} [props.width='w-90'] - Classe Tailwind para largura do mapa
 * @param {string} [props.height='h-58'] - Classe Tailwind para altura do mapa
 * 
 * @example
 * // Com card (padrão)
 * <MapCard 
 *   markers={markersArray}
 *   googleMapsLink="https://maps.app.goo.gl/example"
 *   zoom={14}
 * />
 * 
 * // Sem card, tamanho customizado
 * <MapCard 
 *   markers={markersArray}
 *   withCard={false}
 *   width="w-full"
 *   height="h-96"
 * />
 */
export default function MapCard({ 
  markers = [], 
  googleMapsLink,
  zoom = 16,
  withCard = true,
  width = 'w-90',
  height = 'h-58'
}) {
  // Usa a posição do primeiro marcador como centro, ou Recife como padrão
  const defaultCenter = [-8.0476, -34.877];
  const center = markers.length > 0 ? markers[0].position : defaultCenter;

  // Componente do mapa reutilizável
  const mapElement = (
    <div className={`${height} ${width} rounded-lg overflow-hidden`}>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapMarkers markers={markers} />
      </MapContainer>
    </div>
  );

  // Se não tiver card, retorna apenas o mapa
  if (!withCard) {
    return mapElement;
  }

  // Com card (comportamento padrão)
  return (
    <div
      className="flex flex-col w-fit justify-start 
        border border-[#6C707880] rounded-2xl 
        px-4 pt-2 pb-1 mr-2 shadow-xl gap-3"
    >
      <IconTitle icon={MapPin} title={"Localização"} />
      {mapElement}
      {googleMapsLink && (
        <a 
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer justify-center mb-1.5 flex flex-row gap-2 border border-[#6C707880] rounded-xl py-1 hover:scale-105 transition-all delay"
        >
          <Typography>
            Ver no Google Maps 
          </Typography>
          <Map></Map>
        </a>
      )}
    </div>
  );
}

MapCard.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      position: PropTypes.arrayOf(PropTypes.number).isRequired,
      image: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  googleMapsLink: PropTypes.string,
  zoom: PropTypes.number,
  withCard: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
};
