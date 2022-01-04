import AbstractView from '../AbstractView.js';
import flexgrowPage from './flexgrow.html';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Flex Grow');
    }

    script() {
        console.log('Flex Grow page load success');
    }

    async getHtml() {
        return flexgrowPage;
    }
}
