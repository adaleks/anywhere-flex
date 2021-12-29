import AbstractView from '../AbstractView.js';
import overflowPage from './overflow.html';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Overflow');
    }

    script() {
        console.log('Overflow page load success');
    }

    async getHtml() {
        return overflowPage;
    }
}
