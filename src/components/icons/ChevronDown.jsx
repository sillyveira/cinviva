import React from 'react'
import PropTypes from 'prop-types';
import IconProperties from './IconProperties.jsx'

export default function ChevronDown({ className = '', size }) {
  const iconSize = size || IconProperties.size;

  return (
    <div className={`${IconProperties.color} ${className}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg" 
          width={iconSize} 
          height={iconSize} 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="lucide lucide-chevron-down-icon lucide-chevron-down"
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
  </div>
  )
}

ChevronDown.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};