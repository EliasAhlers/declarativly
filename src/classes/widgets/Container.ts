import { Widget } from "../Widget";

export class Container extends Widget {

    constructor(private child: Widget) {
        super();
        this.element = document.createElement('div');
        this.element.appendChild(child.render());
    }

}
