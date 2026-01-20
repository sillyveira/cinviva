import React from 'react'
import IconProperties from './IconProperties.jsx'


export default function ChevronDown() {
  return (
    <div className={`${IconProperties.color}`}>
        <svg
        xmlns="http://www.w3.org/2000/svg" width={`${IconProperties.size}`} height={`${IconProperties.size}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
  </div>
  )
}
