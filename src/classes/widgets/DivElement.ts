import { Widget } from "../Widget";

export class DivElement extends Widget {

    protected element: HTMLDivElement;

    constructor(public children: Array<Widget>) {
        super();
        this.element = document.createElement('div');
        this.children.forEach((child: Widget) => {
            this.element.appendChild(child.render());
        })
    }

    public reRender(widget: DivElement): void {
        this.children.forEach((child: Widget, index: number) => {
            child.reRender(widget.children[index]);
        });
    }

}
