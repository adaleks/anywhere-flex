import AbstractView from '../AbstractView.js';
import flexwrapPage from './flexwrap.html';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Flex Wrap');
    }

    script() {
        console.log('Flex Wrap page load success');
    }

    async getHtml() {
        return flexwrapPage;
    }
}
