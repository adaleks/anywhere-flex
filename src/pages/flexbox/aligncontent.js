import AbstractView from '../AbstractView.js';
import aligncontentPage from './aligncontent.html';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Align Content');
    }

    script() {
        console.log('Align Content page load success');
    }

    async getHtml() {
        return aligncontentPage;
    }
}
