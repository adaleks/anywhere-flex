import AbstractView from '../AbstractView.js';
import gridsystemPage from './gridsystem.html';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('GridSystem');
    }

    script() {
        console.log('GridSystem page load success');
        // this.viewOnGithubBtn = document.querySelector("#view_on_github");
        // this.viewOnGithubBtn.addEventListener("aOnClick", (event) => {
        //     window.open('https://github.com/adaleks/anywhere-ui/tree/main/packages/core/src/components/radio-button', '_blank');
        // });
        // this.rb1 = document.querySelector("#rb1");
        // this.is2.addEventListener("valueChange", (event) => {
        //   console.log("Radio Button changed:", event);
        // });
    }

    async getHtml() {
        return gridsystemPage;
    }
}
