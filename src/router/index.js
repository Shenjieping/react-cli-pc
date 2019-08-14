import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from '../App.js';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';

export default class RouteMap extends Component {
    render() {
        return (
            <Router>
                <Route path='/'>
                    <Route component={App} />
                    <Switch>
                        <Route path='/page1' component={Page1} />
                        <Route path='/page2' component={Page2} />
                    </Switch>
                </Route>
            </Router>
        );
    }
}