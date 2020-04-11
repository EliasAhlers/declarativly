import { Widget } from "../Widget";

export class Container extends Widget {

    protected element: HTMLDivElement;

    constructor(public child: Widget) {
        super();
        this.element = document.createElement('div');
        this.element.appendChild(this.child.render());
    }

    public reRender(widget: Container): void {
        this.child.reRender(widget.child);
    }

}
