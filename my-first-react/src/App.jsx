import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [name, setName] = useState("")
  const [submittedName, setSubmittedName] = useState("")

  const projects = [
    {
      name: "Portfolio",
      description: "My Personal developer portfolio",
      tech: "HTML, CSS and Javascript"
    },
    {
      name: "Security",
      description: "Security Practices",
      tech: "OWASP ZAP, BurpSuite",
    }
  ]

function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>
}

function UserCard(props) {
  return(
    <div>
      <h2>{props.name}</h2>
      <p>{props.role}</p>
    </div>
  )
}


  return (
    <div>
     <h1>Hello, React!</h1>

      {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please log in</h2>}

      <form
        onSubmit={(event) =>{
          event.preventDefault()
          setSubmittedName(name)
        }}>

       <p>Submitted name: {submittedName}</p>

        <input 
         type="text" 
         placeholder="Enter your name" 
         value={name}
         onChange={(event) => setName(event.target.value)}
        />
        <p>Your name is: {name}</p>

        <button type="submit">Submit</button>
      </form>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Log out" : "Log in"}</button>



        <Greeting name="Amari"/>
        <Greeting name="James"/>
        <Greeting name="John"/>
        <Greeting name="Edward"/>
        <UserCard name="Amari" role="Frontend Developer" />
        <UserCard name="Simon" role="UI Designer" />

     <p>Likes: {likes}</p>

      <ul>
        {projects.map((project) => (
         <li key={project.name}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p>Tech: {project.tech}</p>
         </li>
        ))}
      </ul>
     
     <button onClick={() => setLikes(likes + 1)}> Like</button>
    </div>
  )
}



export default App
