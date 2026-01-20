import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AccordionItem } from './AccordionItem';

export function Accordion({ title, items, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className={`w-full ${className}`}>
      
      <button 
        onClick={toggleAccordion}
        className={`
          w-full flex items-center justify-between p-4 bg-white transition-all duration-200
          border-2
          ${isOpen 
            ? 'border-primary-default rounded-t-lg rounded-b-none' // Aberto
            : 'border-gray-800 rounded-lg'                         // Fechado
          }
        `}
      >
        <span className="text-body font-medium text-gray-800">
          {title}
        </span>
        
        {isOpen ? (
          <ChevronUp className="text-primary-default" size={24} />
        ) : (
          <ChevronDown className="text-gray-800" size={24} />
        )}
      </button>

      {isOpen && (
        <div className="border-2 border-t-0 border-gray-400 rounded-b-lg overflow-hidden bg-white">
          {items.map((item, index) => (
            <AccordionItem 
              key={item.id || index}
              text={item.text}
              imageSrc={item.imageSrc}

              // Logzin só pra teste, tem que remover depois
              onClick={() => console.log(`Clicou em: ${item.text}`)}
              
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
      imageSrc: PropTypes.string, // Opcional
    })
  ).isRequired,
  className: PropTypes.string,
};