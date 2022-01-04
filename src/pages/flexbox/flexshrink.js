import AbstractView from '../AbstractView.js';
import flexshrinkPage from './flexshrink.html';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Flex Shrink');
    }

    script() {
        console.log('Flex Shrink page load success');
    }

    async getHtml() {
        return flexshrinkPage;
    }
}
