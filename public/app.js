import Store from './store';
import Counter from './Counter';
import React from 'react';
import ReactDOM from 'react-dom';

// Could this somehow load a CSS file for us?
import './styles.css';

const app = document.querySelector('#app');
const store = new Store(app, [
    'Sheer Shears',
    'Wool Hauling Basket',
    'After-Shear (Fresh Cut Grass)',
    'After-Shear (Morning Dew)',
    'Shear Comb',
    'Shearly Conditioned'
]);
store.initialize();

ReactDOM.render(
    <Counter />,
    document.getElementById('react-app')
);
