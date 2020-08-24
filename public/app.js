var products = [
    'Sheer Shears',
    'Wool Hauling Basket',
    'After-Shear (Fresh Cut Grass)',
    'After-Shear (Morning Dew)',
    'Shear Comb',
    'Shearly Conditioned'
];

var button = document.querySelector('#button');
var app = document.querySelector('#app');
button.addEventListener('click', function() {
    app.innerHTML = products.join(', ');
});
