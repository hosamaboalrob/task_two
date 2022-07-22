import React from 'react';
import ReactDOM from 'react-dom';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

 import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
   
,  document.getElementById('root')
);
