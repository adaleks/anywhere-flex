import AbstractView from '../AbstractView.js';
import alignitemsPage from './alignitems.html';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Align Items');
    }

    script() {
        console.log('Align Items page load success');
    }

    async getHtml() {
        return alignitemsPage;
    }
}
