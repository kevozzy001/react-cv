import React from 'react'
import { useState } from 'react'

function Inputs({ onAdd }) {
  const [position, setPosition] = useState('')
  const [year, setYear] = useState('')
  const [company, setCompany] = useState('')
  const [desc, setDesc] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if(!year){
      return
    }

    onAdd({ position, year, company, desc })

    setPosition('')
    setYear('')
    setCompany('')
    setDesc('')
  }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Job Title</label>
          <input 
            type="text" 
            value={position} 
            onChange={(e) => setPosition(e.target.value)} 
            placeholder='Add job, education, or any other experience'/>
        </div>
        <div className='form-control'>
          <label>Year</label>
          <input type="text" 
          value={year} 
          onChange={(e) => setYear(e.target.value)} 
          placeholder='Add year'/>
        </div>
        <div className='form-control'>
          <label>Company</label>
          <input type="text" 
          value={company} 
          onChange={(e) => setCompany(e.target.value)} 
          placeholder='Add location, company, or school'/>
        </div>

        <div className='form-control'>
          <label>Job description</label>
          <textarea type="textarea" rows="5" cols="38"
          value={desc} 
          onChange={(e) => setDesc(e.target.value)} 
          placeholder='Add description'/>
        </div>


        <input type="submit" value='Add new job'/>
    </form>
  )
}

export default Inputs