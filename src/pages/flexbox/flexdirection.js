import AbstractView from '../AbstractView.js';
import flexdirectionPage from './flexdirection.html';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Flex Direction');
    }

    script() {
        console.log('Flex Direction page load success');
    }

    async getHtml() {
        return flexdirectionPage;
    }
}
