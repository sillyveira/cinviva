import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ChevronDown,
  ChevronUp
} from '../components/icons';
import { AccordionItem } from './AccordionItem';
import { Typography } from './Typography';

export function Accordion({ title, items, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className={`w-full ${className}`}>
      <button 
        onClick={toggleAccordion}
        className={`
          group 
          w-full flex items-center justify-between p-4 bg-white transition-all duration-200
          border-2 rounded-lg 
          ${isOpen 
            ? 'border-primary-default' // Aberto: Cor primária
            : 'border-gray-800 hover:border-primary-default' // Fechado: Cinza escuro com hover
          }
        `}
      >
        <Typography 
          tag="h3" 
          size="body" 
          weight="medium"
          className={`transition-colors ${isOpen ? 'text-primary-default' : 'text-gray-800 group-hover:text-primary-default'}`}
        >
          {title}
        </Typography>
        
        {isOpen ? (
          <ChevronUp className="!text-primary-default" size={24} />
        ) : (
          <ChevronDown className="!text-black group-hover:!text-primary-default transition-colors" size={24} />
        )}
      </button>

      {isOpen && (
        <div className="mt-2 border-2 border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
          {items.map((item, index) => (
            <AccordionItem 
              key={item.id || index}
              text={item.text}
              imageSrc={item.imageSrc}
              onClick={() => console.log(`Clicou em: ${item.text}`)} // Logzin
            />
          ))}
        </div>
      )}
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.string.isRequired,
      imageSrc: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};