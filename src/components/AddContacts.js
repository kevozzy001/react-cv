import { useState } from 'react'

function AddContacts( { onAdd } ) {
    const [contactType, setContact] = useState('')
    const [method, setMethod] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!method || !contactType) {
            alert('none')
            return
        }

        onAdd({ contactType, method })
        setContact('')
        setMethod('')
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <h3>AddContacts</h3>
        <div className='form-control'>
                <label>Contact</label>
                <input 
                    type="text" 
                    value={contactType}
                    onChange={(e) => setContact(e.target.value)} 
                    placeholder='Add contact'/>
            </div>
            <div className='form-control'>
                <label>Contact Information</label>
                <input 
                    type="text" 
                    value={method}
                    onChange={(e) => setMethod(e.target.value)} 
                    placeholder='Add contact information'/>
            </div>
            <input type="submit" value='Add contact information' />

    </form>
    
  )
}

export default AddContacts