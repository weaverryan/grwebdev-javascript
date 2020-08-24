import Store from './store';
import Counter from './Counter';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

// Could this somehow load a CSS file for us?
import './styles.css';

const app = document.querySelector('#app');

const response = await axios.get('/products');
const store = new Store(app, response.data);
store.initialize();

ReactDOM.render(
    <Counter />,
    document.getElementById('react-app')
);
