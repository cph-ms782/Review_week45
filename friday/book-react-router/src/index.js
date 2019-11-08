import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import bookStore from './bookStore';

ReactDOM.render(<App bookStore={bookStore} />, document.getElementById('root'));

