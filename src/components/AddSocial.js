import React from 'react'
import { useState } from 'react'

function AddHeader({ onAdd }) {
    const [socialMedia, setSocialMedia] = useState('')
    const [url, setUrl] = useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()

        if(!socialMedia || !url){
            alert('none')
            return
        }

        onAdd({ socialMedia, url })

        setSocialMedia('')
        setUrl('')
    }

  return (
        <form className='add-form' onSubmit={onSubmit}>
            <h3>Add contact information</h3>
            <div className='form-control'>
                <label>Social</label>
                <input 
                    type="text" 
                    value={socialMedia}
                    onChange={(e) => setSocialMedia(e.target.value)} 
                    placeholder='Add social'/>
            </div>
            <div className='form-control'>
                <label>Url</label>
                <input 
                    type="text" 
                    value={url}
                    onChange={(e) => setUrl(e.target.value)} 
                    placeholder='Add url'/>
            </div>
            <input type="submit" value='Add social' />
            
        </form>

  )
}

export default AddHeader