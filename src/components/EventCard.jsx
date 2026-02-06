import React from 'react'
import { Typography } from './Typography'
import PropTypes from 'prop-types'
import imgCard from '../assets/imgCard.png'


/**
 * EventCard Component
 * Exibe informações sobre um evento com imagem, data, hora, título e local
 * @param {Object} props
 * @param {string} [props.imageUrl] - URL da imagem (padrão = imgCard)
 * @param {string} [props.imageAlt] - Texto alternativo para a imagem (padrão = 'Imagem do evento')
 * @param {string} props.date - Data
 * @param {string} props.time - Horário
 * @param {string} props.title - Título
 * @param {string} props.location - Local
 * @param {string} [props.className]
 * @param {Function} [props.onClick]
 */


export default function EventCard({
    imageUrl = imgCard,
    imageAlt = 'Imagem do evento',
    date = '',
    time = '',
    title = '',
    location = '',
    className = '',
    onClick = null
}) {


    return (
        <div
            onClick={onClick}
            className={`flex 
                flex-col 
                w-full 
                max-w-sm
                border border-[#6C707880] 
                rounded-2xl 
                overflow-hidden
                shadow-[0_3px_3px_rgba(0,0,0,0.2)] 
                transition-all 
                duration-200 
                cursor-pointer 
                hover:shadow-[0_6px_12px_rgba(0,0,0,0.3)] 
                active:scale-95 
                ${className}`}
        >
            {/* Container da imagem */}
            {imageUrl && (
                <div className="w-full h-48 sm:h-56 overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={imageAlt}
                        className="w-full 
                        h-full 
                        object-cover
                        transition-transform
                        duration-300
                        hover:scale-105"
                    />
                </div>
            )}

            {/* Container do conteúdo */}
            <div className="flex flex-col gap-1 px-4 py-3">
                {/* Data e Hora */}
                <div className="flex flex-row gap-1 items-center">
                    <Typography
                        tag="span"
                        size="xsmall"
                        weight="regular"
                        className="text-gray-400"
                    >
                        {date}
                    </Typography>
                    <span className="text-gray-400">•</span>
                    <Typography
                        tag="span"
                        size="xsmall"
                        weight="regular"
                        className="text-gray-400"
                    >
                        {time}
                    </Typography>
                </div>

                {/* Título */}
                <Typography
                    tag="h3"
                    size="body"
                    weight="bold"
                    className="text-gray-900"
                >
                    {title}
                </Typography>

                {/* Local */}
                <Typography
                    tag="p"
                    size="small"
                    weight="regular"
                    className="text-gray-500"
                >
                    {location}
                </Typography>
            </div>

            {/* Barra azul na parte inferior */}
            <div className="h-1 bg-blue-600"></div>
        </div>
    )
}


EventCard.propTypes = {
    imageUrl: PropTypes.string,
    imageAlt: PropTypes.string,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
}
