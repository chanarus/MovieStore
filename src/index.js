import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';
import { db_config } from './config/db_config';

// Initialize Firebase
firebase.initializeApp(db_config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
