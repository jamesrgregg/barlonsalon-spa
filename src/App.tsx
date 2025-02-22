import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://nebula.wsimg.com/fed577ff604e3d25ba7de500dd941821?AccessKeyId=531592D248B589D87A56&alloworigin=1" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Barlon Salon</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Welcome
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
