import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
