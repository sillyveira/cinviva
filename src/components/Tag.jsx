import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Tag
 * Exibe um texto dentro de um retângulo arredondado com cores configuráveis.
 *
 * @param {Object} props
 * @param {string} props.text                - O texto a ser exibido dentro da tag.
 * @param {string} [props.variant='primary'] - A variante de cor da tag.
 * @param {string} [props.className]         - Classes extras para customização.
 */
export function Tag({ text, variant = 'primary', className = '' }) {
  const variantClasses = {
    primary: 'bg-primary-default text-white',
    secondary: 'bg-primary-dark text-white',
    tertiary: 'bg-gray-100 text-gray-800',
  };

  // Seleciona as classes com base na variante ou usa a primária como padrão
  const colorClass = variantClasses[variant] || variantClasses.primary;

  return (
    <span
      className={`
        inline-block
        px-3 py-1
        rounded-full
        text-xsmall font-medium
        ${colorClass}
        ${className}
      `}
    >
      {text}
    </span>
  );
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  className: PropTypes.string,
};