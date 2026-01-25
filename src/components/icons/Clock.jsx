import React from 'react'
import IconProperties from './IconProperties.jsx'


export default function Clock() {
  return (
    <div className={`${IconProperties.color}`}>

        <svg
        xmlns="http://www.w3.org/2000/svg" width={`${IconProperties.size}`} height={`${IconProperties.size}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-icon lucide-clock"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
  </div>
  )
}