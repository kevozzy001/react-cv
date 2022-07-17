import React, { useState } from 'react'

function Contact({ contacts, onRemove }) {
  const [showRemove, setShowRemove] = useState(false)
  
  return (
    <div  onMouseEnter={() => setShowRemove(true)}
    onMouseLeave={() => setShowRemove(false)}>
      {contacts.map((contact) => {
        return (
          <div className="social-medias" key={contact.id}>
            <h5>{contact.contactType}</h5>
            <span>{contact.method}</span>
            {showRemove && <button className='small-remove-btn'
        onClick={()=>onRemove(contact.id)}>Remove</button>}
          </div>
        )
      })}
      
    </div>
  )
}

export default Contact