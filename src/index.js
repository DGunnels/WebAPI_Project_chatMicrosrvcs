'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import siteNav from './nav.js';
import * as serviceWorker from './serviceWork';



ReactDOM.render(

    <Router>
        <siteNav />
    </Router>,
    document.getElementById('root')

);

serviceWorker.unregister();