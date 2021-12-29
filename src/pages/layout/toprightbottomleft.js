import AbstractView from '../AbstractView.js';
import toprightbottomleftPage from './toprightbottomleft.html';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Top / Right / Bottom / Left');
    }

    script() {
        console.log('Toprightbottomleft page load success');
    }

    async getHtml() {
        return toprightbottomleftPage;
    }
}
