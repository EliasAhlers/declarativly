
export class Widget {

    protected element: HTMLElement;

    constructor() {
        this.element = document.createElement('div');
    }

    public render(): HTMLElement {
        return this.element;
    }

}
