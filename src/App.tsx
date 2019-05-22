import React from 'react'
import './App.css'
import logo from './logo.svg'

export const CamelCase: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" src={logo} />
        <p>
          Develop Changed 2nd Time Branch <code> src/App.tsx</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
