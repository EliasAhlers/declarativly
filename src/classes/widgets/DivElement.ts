import { Widget } from "../Widget";

export class DivElement extends Widget {

    protected element: HTMLDivElement;

    constructor(children: Array<Widget>) {
        super();
        this.element = document.createElement('div');
        this.widgetState['children'] = children;
        this.widgetState['children'].forEach((child: Widget) => {
            this.element.appendChild(child.render());
        });
    }

    public stateUpdated(): void {
        // for (let i = 0; i < this.element.children.length; i++) {
        //     const htmlChild = this.element.children[i];
        //     htmlChild.remove();
        // }
        this.element.innerHTML = '';
        this.widgetState['children'].forEach((child: Widget) => {
            this.element.appendChild(child.render());
        });
    }

    public reRender(widget: DivElement): void {
        // console.log('++++++++++++++', widget.widgetState['children'], '-', this.widgetState['children']);
        // if(widget.widgetState['children'].length != this.widgetState['children'].length) {
        if(widget.widgetState != this.widgetState) {
            this.widgetState = widget.widgetState;
            this.stateUpdated();
        }
        this.widgetState['children'].forEach((child: Widget, index: number) => {
            child.reRender(widget.widgetState['children'][index]);
        });
    }

}
