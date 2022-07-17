import { useState } from "react"

function Social( { socials, onRemove } ) {
  const [showRemove, setShowRemove] = useState(false)

  return (
    <div className='social-container'
    onMouseEnter={() => setShowRemove(true)}
    onMouseLeave={() => setShowRemove(false)}>
      {socials.map((social) => {
        return (
          <div className="social-medias" key={social.id}>
            <h5>{social.socialMedia}</h5>
            <span>{social.url}</span>
            {showRemove && <button className='small-remove-btn'
        onClick={()=> onRemove(social.id)}>Remove</button>}
          </div>
        )
      })}
    </div>
  )
}

export default Social