import { Controller } from 'stimulus';

export default class extends Controller {
    static get targets() {
        return ['productList'];
    }

    printProducts() {
        this.productListTarget.innerHTML = 'Testing!'
    }
}
