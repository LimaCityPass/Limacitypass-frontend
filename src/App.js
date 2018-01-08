import React, { Component } from 'react';

import './App.css';

import AdminPage from './pages/admin';
import LcpLanding from './pages/landing_page';
import LcpLoginPage from './pages/login';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';




class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <div>
                        <Route path="/" exact component={LcpLanding}/>
                        <Route path="/admin" component={AdminPage}/>
                        <Route path="/login" component={LcpLoginPage}/>
                    </div>
                </Router>
            </MuiThemeProvider>

        );
    }
}

export default App;
