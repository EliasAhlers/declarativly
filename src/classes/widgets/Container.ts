import { Widget } from "../Widget";

export class Container extends Widget {

    constructor(private child: Widget) {
        super();
    }

    public renderHTML(): string {
        return '<div>' + this.child.renderHTML() + '</div>';
    }

}
