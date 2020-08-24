import { Controller } from 'stimulus';
import axios from 'axios';

export default class extends Controller {
    static get targets() {
        return ['productList'];
    }

    async printProducts() {
        const response = await axios.get('/products');
        const products = response.data;

        this.productListTarget.innerHTML = products.join(', ');
    }
}
