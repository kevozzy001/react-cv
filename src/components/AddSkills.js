import React, { useState } from 'react'

function AddSkills({ onUpdate }) {
    const [skill, setSkill] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!skill){
            return
        }

        onUpdate( {skill} )
        setSkill('')
    }
    
  return (
    <form className='form-control' onSubmit={onSubmit}>
        <label>Add skills</label>
        <input type="text" value={skill}
         onChange={e => setSkill(e.target.value)} placeholder='Add skill'/>
        <input type="submit" value='Add skill'
        />
    </form>
  )
}

export default AddSkills