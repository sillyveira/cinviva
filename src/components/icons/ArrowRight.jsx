import React from 'react'
import IconProperties from './IconProperties.jsx'


export default function ArrowRight({color}) {
  return (
    <div className={`${IconProperties.color} ? ${IconProperties.color} : text-${color} `}>
        <svg
        xmlns="http://www.w3.org/2000/svg" width={`${IconProperties.size}`} height={`${IconProperties.size}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>

  </div>
  )
}
