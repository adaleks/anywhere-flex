import AbstractView from '../AbstractView.js';
import positionPage from './position.html';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Position');
    }

    script() {
        console.log('Position page load success');
    }

    async getHtml() {
        return positionPage;
    }
}
