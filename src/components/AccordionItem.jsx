import React from 'react';
import PropTypes from 'prop-types';

export function AccordionItem({ text, imageSrc, onClick, className = '' }) {
  return (
    <div 
      onClick={onClick}
      className={`
        flex items-center justify-between 
        p-4 
        bg-white cursor-pointer 
        transition-colors duration-200
        border-b border-gray-300        
        last:border-b-0
        hover:border-primary-default    
        ${className}
      `}
    >
      <span className="text-body text-gray-800 font-regular">
        {text}
      </span>

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
  imageSrc: PropTypes.string, // Opcional (Feiras não terão, Mercados terão)
  onClick: PropTypes.func,
  className: PropTypes.string,
};