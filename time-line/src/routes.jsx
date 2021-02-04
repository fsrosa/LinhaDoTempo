import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import TimeLines from './pages/LinhaDoTempo'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/time-lines" component={TimeLines}/>
            </Switch>
        </BrowserRouter>
    )
}