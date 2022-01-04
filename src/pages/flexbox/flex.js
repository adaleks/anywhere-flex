import AbstractView from '../AbstractView.js';
import flexPage from './flex.html';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Flex');
    }

    script() {
        console.log('Flex page load success');
    }

    async getHtml() {
        return flexPage;
    }
}
