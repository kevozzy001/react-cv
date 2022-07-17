
function Bio( { bio } ) {
  return (bio.map(element => {
    return(
      <div className='bio' key={element.id}>
      <h3>Bio</h3>
      <p>{element.bioInfo}</p>
    </div>
    )
  })
  )
}

export default Bio