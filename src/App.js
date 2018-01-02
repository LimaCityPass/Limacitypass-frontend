import React, { Component } from 'react';
import './App.css';

import AdminPage from './pages/admin';
import LcpLanding from './pages/landing_page';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={LcpLanding}/>
                    <Route path="/admin" component={AdminPage}/>
                </div>
            </Router>
        );
    }
}

export default App;
