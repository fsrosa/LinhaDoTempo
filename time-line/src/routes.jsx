import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon/Logon'
import Home from './pages/Home'
import TimeLines from './pages/LinhaDoTempo'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/time-lines" component={TimeLines}/>
                <Route path="/home" component={Home}/>

            </Switch>
        </BrowserRouter>
    )
}