import { Widget, State } from "../Widget";

export class Container extends Widget {

    protected element: HTMLDivElement;

    constructor(child: Widget) {
        super();
        this.widgetState['child'] = child;
        this.element = document.createElement('div');
        this.element.appendChild(child.render());
    }

    public stateUpdated(): void {
        this.element.innerHTML = '';
        this.element.appendChild(this.widgetState['child'].render());
    }

    public reRender(widget: Container): void {
        if(widget.widgetState != this.widgetState) {
            this.widgetState = widget.widgetState;
            this.stateUpdated();
        }
        this.widgetState['child'].reRender(widget.widgetState['child']);
    }

}
