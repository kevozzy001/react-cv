import React, { useState } from 'react'

function Skills({ skills, onRemove }) {
  const [showRemove, setShowRemove] =useState(false)

  return (
    <ul className='skills-container'>
        <h3>Skills</h3>
        {skills.map(skill => {
            return(
                <li key={skill.id}
                onMouseEnter={() => setShowRemove(true)}
                onMouseLeave={() => setShowRemove(false)}>
                  {skill.skill}
                  {showRemove && <button className='small-remove-btn'
                  onClick={() =>onRemove(skill.id)}>
                    Remove</button>}
                </li>
            )
        })}
    </ul>
  )
}

export default Skills