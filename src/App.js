import { useState } from 'react'
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Social from './components/Social';
import Bio from './components/Bio';
import AddJob from './components/AddJob';
import AddSocial from './components/AddSocial'
import AddContacts from './components/AddContacts';
import AddSkills from './components/AddSkills';
import UpdateBio from './components/UpdateBio';
import Data from './components/Data';
import './App.css';

function App() {
  const [name, setName] = useState('Name')
  const [photo, setPhoto] =useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zK_V8ysvyJ9ZNpa2gzdq2sovk5CSq-S2dg&usqp=CAU')
  const [experience, setExperience] = useState(Data)
  const [skills, setSkills] = useState([
    {
      id:1,
      skill:'Networking',
    },
    {
      id:2,
      skill:'Problem solving'
    },
    {
      id:3,
      skill:'Communication'
    }
  ])

  const [socials, setSocial] = useState(
   [ {
      id:4,
      socialMedia:'Linkedin',
      url:'https://www.linkedin.com/'
    },
    {
      id:5,
      socialMedia:'Github',
      url:'https://github.com/001'
    },
    {
      id:6,
      socialMedia:'Twitter',
      url:'https://twitter.com/001'
    }
    ]
  )

  const [bio, setBio] = useState(
    [{
      id:1,
      bioInfo:'Your bio will show up here.'
    }
    ]
  )

  const [contacts, setContact] = useState(
    [ {
      id:4,
      contactType:'Email',
      method:'1234@email.com'
    },
    {
      id:5,
      contactType:'Phone',
      method:'888-888-8888'
    },
    {
      id:6,
      contactType:'Personal Website',
      method:'www.website.com'
    }
    ]
  )

  const addJob = (job) => {
    const id  = Math.floor(Math.random() * 100000)
    const newJob = {id, ...job}
    setExperience([...experience, newJob])
  }

  const addSocial = (social) => {
    const id  = Math.floor(Math.random() * 100000)
    const newSocial = {id, ...social}
    setSocial([...socials, newSocial])
  }

  const addContact = (contact) => {
    const id = Math.floor(Math.random() * 100000)
    const newContact = {id, ...contact}
    setContact([...contacts, newContact])
  }

  const addSkill = (skill) => {
    const id = Math.floor(Math.random() * 100000)
    const newSkill = {id, ...skill}
    setSkills([...skills, newSkill])
  }
  const updateBio = (bio) => {
    const id = Math.floor(Math.random() * 100000)
    const newBio = {id, ...bio}
    setBio([newBio])
  }

  const removeJob = (id) => {
      setExperience(experience.filter( exp => exp.id !== id))
  }
  const removeContact = (id) => {
    setContact(contacts.filter(contact => contact.id !== id))
  }
  const removeSocial = (id) => {
    setSocial(socials.filter( social => social.id !== id))
  }
  const removeSkill = (id) => {
    setSkills(skills.filter( skill => skill.id !== id))
  }
  
  return (
    <main>
      <section className='resume'>
        <h1 className='name'>{name}</h1>
        <h3>Contact</h3>
        <header>
          <Contact contacts={contacts} onRemove={removeContact}/>
          <Social socials={socials} onRemove={removeSocial}/>
          <img src={photo} className='photo' alt='candidate'/>
        </header>

        <Bio bio={bio}/>
        
        <Experiences experiences={experience} onRemove={removeJob}/>
        <Skills skills={skills} onRemove={removeSkill}/>
        
      </section>

      <div className='add-content-container'>
        <h3>Add your information here!</h3>
        <h3>They will show up on the left side!</h3>
        <form >
          <label>Update your name here:</label>
          <input type="text"  onChange={(e) => setName(e.target.value)}/>
        </form>
        <form >
          <label>Update your photo source here:</label>
          <input type="text"  onChange={(e) => setPhoto(e.target.value)}/>
        </form>
        <AddJob onAdd={addJob} />
        <AddSocial onAdd={addSocial}/>
        <AddContacts onAdd={addContact}/>
        <AddSkills onUpdate={addSkill}/>
        <UpdateBio onUpdate={updateBio}/>
      </div>
      
    </main>
  );
}

export default App;
