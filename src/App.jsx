{/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/}

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import IndukProps from "./pages/Induk-Props";
import IndukImage from "./pages/IndukImage";
import Landing from "./pages/Landing";
import NotFound from "./pages/notfound";
import State from "./pages/State";
import EventHandling from "./pages/EventHandling";
import NonState from "./pages/NonState";

function App() {
  return ( 
    <>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/landingpage" Component={Landing}/>
      <Route path="/indukprops" Component={IndukProps}/>
      <Route path="/indukimage" Component={IndukImage}/>
      <Route path="/state" Component={State}/>
      <Route path="/nonstate" Component={NonState}/>
      <Route path="/home" Component={Home}/>
      <Route path="/eventhandling" Component={EventHandling} />
    </Routes>
    </>
   );
}



export default App;