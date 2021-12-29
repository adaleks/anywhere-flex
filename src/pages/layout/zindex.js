import AbstractView from '../AbstractView.js';
import zindexPage from './zindex.html';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Z-Index');
    }

    script() {
        console.log('Z-Index page load success');
    }

    async getHtml() {
        return zindexPage;
    }
}
