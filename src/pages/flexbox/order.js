import AbstractView from '../AbstractView.js';
import orderPage from './order.html';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Flex Order');
    }

    script() {
        console.log('Flex Order page load success');
    }

    async getHtml() {
        return orderPage;
    }
}
