import React, { useState } from 'react'

function Experience({ experience, onRemove }) {
  const [showRemove, setShowRemove] = useState(false)
  
  return (
    <div className='individual-experience-container' 
    onMouseEnter={() => setShowRemove(true)}
    onMouseLeave={() => setShowRemove(false)}>
      <span className='experience-year'>{experience.year}</span>
      <div className='experience'>
        <h3>{experience.position}</h3> 
        <h6>{experience.company}</h6>
        <p>{experience.desc}</p>
      </div>
        
        {showRemove && <button className='remove-btn'
        onClick={()=>onRemove(experience.id)}>Remove</button>}
    </div>
  )
}

export default Experience