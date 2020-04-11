import { Widget } from "../Widget";

export class Text extends Widget {

    protected element: HTMLParagraphElement;
    
    constructor(private text: string) {
        super();
        this.element = document.createElement('p');
        this.widgetState['text'] = this.text;
        this.stateUpdated();
    }

    stateUpdated() {
        this.element.textContent = this.widgetState['text'];
    }

}
