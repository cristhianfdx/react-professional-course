import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';

ReactDOM.render(<Counter value={10} />, document.querySelector('#root'));
