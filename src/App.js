import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import Home from './pages/Home'
import Info from './pages/Info'
import CalendarCustom from './pages/Calendar'
import AnotherDayInfo from './pages/AnotherDayInfo'

class App extends React.Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/info/:city' component={Info} />
            <Route path='/another-info/:city' component={AnotherDayInfo} />
            <Route path='/calendar/:city' component={CalendarCustom} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App