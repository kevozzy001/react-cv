import React from 'react'
import Experience from './Experience'

function Experiences({ experiences, onRemove }) {
  return (
    <div className='experience-container'>
      <h3>Experience and education</h3>
      {experiences.map(experience => 
      <Experience key={experience.id} experience={experience}
      onRemove={onRemove}/>)}
    </div>
  )
}

export default Experiences