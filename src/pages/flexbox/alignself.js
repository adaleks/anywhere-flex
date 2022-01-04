import AbstractView from '../AbstractView.js';
import alignselfPage from './alignself.html';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Align Self');
    }

    script() {
        console.log('Align Self page load success');
    }

    async getHtml() {
        return alignselfPage;
    }
}
