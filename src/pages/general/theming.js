import AbstractView from '../AbstractView.js';
import themingPage from './theming.html';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Theming');
    }

    script() {
        console.log('Theming page load success');
    }

    async getHtml() {
        return themingPage;
    }
}
