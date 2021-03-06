import AbstractView from '../AbstractView.js';
import justifycontentPage from './justifycontent.html';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Justify Content');
    }

    script() {
        console.log('Justify Content page load success');
    }

    async getHtml() {
        return justifycontentPage;
    }
}
