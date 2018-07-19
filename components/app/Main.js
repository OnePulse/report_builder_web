import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home';
import Login from './Login';
import Register from './Register';

import Dashboard from '../../containers/Dashboard';
import Report from '../../containers/Report';

export default class App extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>

                    <Route path='/dashboard' component={Dashboard} onEnter={requireAuth}/>
                    <Route path='/report' component={Report} onEnter={requireAuth}/>
                </Switch>
            </main>
        )
    }
}

function requireAuth(nextState, replace) {

    if (!sessionStorage.access_token) {

        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}