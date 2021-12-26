import AbstractView from './AbstractView.js';
import pageNotFound from './404.html';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Page Not Found');
    }

    script() {}

    async getHtml() {
        return pageNotFound;
    }
}
