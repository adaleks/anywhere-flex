export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        if (title) {
            document.title = 'AnywhereFlex - ' + title;
        } else {
            document.title = 'AnywhereFlex ';
        }
    }

    async getHtml() {
        return '';
    }

    script() {}
}
