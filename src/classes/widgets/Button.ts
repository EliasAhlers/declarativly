import { Widget } from "../Widget";

export class Button extends Widget {

    protected element: HTMLButtonElement;

    constructor(private onClick: Function, private child: Widget) {
        super();
        this.element = document.createElement('button');
        this.element.addEventListener('click', () => {
            this.onClick();
        });
    }

    public render(): HTMLElement {
        this.element.appendChild(this.child.render());
        return this.element;
    }
    
}
