import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../../pages/home/home.page';

import '../../common/styles';
import './app.component.css'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
