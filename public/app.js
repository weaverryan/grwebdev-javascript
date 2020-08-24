class Store {
    constructor(products) {
        this.products = products;
    }

    getProductsString() {
        return this.products.join(', ');
    }
}

const store = new Store([
    'Sheer Shears',
    'Wool Hauling Basket',
    'After-Shear (Fresh Cut Grass)',
    'After-Shear (Morning Dew)',
    'Shear Comb',
    'Shearly Conditioned'
]);

const button = document.querySelector('#button');
const app = document.querySelector('#app');
button.addEventListener('click', function() {
    app.innerHTML = store.getProductsString();
});
