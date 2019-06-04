import React from 'react'
import Home from './Home/index'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Home />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
