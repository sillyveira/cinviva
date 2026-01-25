import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from './Typography';

export function AccordionItem({ text, imageSrc, onClick, className = '' }) {
  return (
    <div 
      onClick={onClick}
      className={`
        flex items-center justify-between 
        p-4 
        bg-white cursor-pointer 
        transition-colors duration-200
        border-b border-gray-200        
        last:border-b-0
        hover:bg-gray-50
        group
        ${className}
      `}
    >
      <Typography 
        tag="p" 
        size="body" 
        weight="regular" 
        className="text-gray-800 group-hover:text-primary-default transition-colors"
      >
        {text}
      </Typography>

      {/* Renderização Condicional: Só mostra a imagem SE ela existir */}
      {imageSrc && (
        <img 
          src={imageSrc} 
          alt={text} 
          className="w-16 h-10 object-cover rounded shadow-sm"
        />
      )}
    </div>
  );
}

AccordionItem.propTypes = {
  text: PropTypes.string.isRequired,
  imageSrc: PropTypes.string, 
  onClick: PropTypes.func,
  className: PropTypes.string,
};