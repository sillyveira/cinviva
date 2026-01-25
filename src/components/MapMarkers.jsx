import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Typography } from './Typography';
import PropTypes from 'prop-types';

/**
 * Componente MapMarkers
 * Renderiza uma lista de marcadores no mapa com popup customizado
 * 
 * @param {Object} props
 * @param {Array} props.markers - Array de objetos com informações dos marcadores
 * @param {string} props.markers[].title - Título do marcador
 * @param {Array<number>} props.markers[].position - [latitude, longitude]
 * @param {string} [props.markers[].image] - URL da imagem (opcional)
 * @param {string} [props.markers[].description] - Descrição adicional (opcional)
 * 
 * @example
 * <MapMarkers markers={[
 *   { 
 *     title: "Mercado São José", 
 *     position: [-8.0631, -34.8711],
 *     image: "https://example.com/image.jpg",
 *     description: "Mercado histórico"
 *   }
 * ]} />
 */
export default function MapMarkers({ markers = [] }) {
  return (
    <>
      {markers.map((marker, index) => (
        <Marker 
          key={index} 
          title={marker.title} 
          position={marker.position}
        >
          <Popup>
            <div className="flex flex-col gap-2 max-w-xs">
              <Typography tag="h4" weight="medium" size="small">
                {marker.title}
              </Typography>
              
              {marker.image && (
                <img 
                  src={marker.image} 
                  alt={marker.title}
                  className="w-full h-32 object-cover rounded"
                />
              )}
              
              {marker.description && (
                <Typography tag="p" size="xsmall" className="text-gray-600">
                  {marker.description}
                </Typography>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}

MapMarkers.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      position: PropTypes.arrayOf(PropTypes.number).isRequired,
      image: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};
