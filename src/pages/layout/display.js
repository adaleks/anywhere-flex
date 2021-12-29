import AbstractView from '../AbstractView.js';
import displayPage from './display.html';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Display');
    }

    script() {
        console.log('Display page load success');
    }

    async getHtml() {
        return displayPage;
    }
}
