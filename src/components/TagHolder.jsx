import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from './Tag';

/**
 * Componente TagHolder
 * Agrupa e renderiza uma lista de componentes Tag com espaçamento e quebra de linha automática.
 *
 * @param {Object} props
 * @param {Array<{text: string, variant?: string}>} props.tags - Uma lista de objetos, onde cada objeto representa uma tag.
 * @param {string} [props.className] - Classes extras para customização do container.
 */
export function TagHolder({ tags, className = '' }) {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag, index) => (
        <Tag 
            key={tag.id || index} 
            text={tag.text} 
            variant={tag.variant} 
        />
      ))}
    </div>
  );
}

TagHolder.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.string.isRequired,
      variant: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};