import { useState } from 'react'

function UpdateBio( { onUpdate } ) {
    const [bioInfo, setBioInfo] = useState('')

    const onSubmit = (e) => {
      e.preventDefault()
      if(!bioInfo) {
          alert('no bio')
          return
      }

      onUpdate( {bioInfo})
      setBioInfo('')
  }
  return (
    <form className='form-control' onSubmit={onSubmit}>
            <label>Bio</label>
            <textarea
                type="text" rows="8" cols="38"
                value={bioInfo}
                onChange={(e) => setBioInfo(e.target.value)} 
                placeholder='add bio'/>
            <input type="submit" value='Update bio'/>
      </form>   
  )
}

export default UpdateBio