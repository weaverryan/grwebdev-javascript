import Store from './store';
import Counter from './Counter';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

// Could this somehow load a CSS file for us?
import './styles.css';

/* Stimulus Setup */
import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
const application = Application.start()
const context = require.context('./controllers', true, /\.js$/)
application.load(definitionsFromContext(context))
/* End Stimulus Setup */

const app = document.querySelector('#app');

async function initializeStore() {
    const response = await axios.get('/products');
    const store = new Store(app, response.data);
    store.initialize();
}
initializeStore();

ReactDOM.render(
    <Counter />,
    document.getElementById('react-app')
);
