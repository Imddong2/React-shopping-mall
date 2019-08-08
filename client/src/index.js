import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//index.html에 root에 app.js component 출력
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
