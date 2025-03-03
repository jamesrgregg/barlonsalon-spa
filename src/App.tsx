// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import barlonstyleLogo from './assets/barlon-salon-diversion.jpg'
import barlonLogo from './assets/barlonlogo.png'
import './App.css'

function App() {
//   const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://jamesrgregg.github.io/barlonsalon-spa/" target="_blank">
          <img src={barlonLogo} className="logo" alt="Barlon Salon - The Salon of Diversion" />
        </a>
      </div>
      <h1>Barlon Salon</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          <b>Welcome to Barlon Salon</b>
          <p>A premium and modern hair salon based in Chandler.</p>
        </p>
        <p>
          Contact
        </p>
        <p>
          Services
        </p>
        {/* <p>
          Section Header
        </p> */}
      </div>
      <p className="read-the-docs">
        Barlon Salon - The Salon of Diversion
      </p>
    </>
  )
}

export default App
